import { serve } from "https://deno.land/std@0.131.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const YOUR_EMAIL = Deno.env.get("YOUR_EMAIL");

serve(async (request: Request): Promise<Response> => {
  const {
    email,
    message,
    name,
  }: { email: string; message: string; name: string } = await request.json();

  if (!email?.length) {
    return new Response(JSON.stringify({ error: "No email provided" }), {
      status: 400,
    });
  }

  // Function to send email
  const sendEmail = async (
    to: string,
    subject: string,
    htmlContent: string
  ): Promise<Response> => {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: to,
          subject: subject,
          html: htmlContent,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      return await res.json();
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error?.message }), {
        status: 500,
      });
    }
  };

  try {
    await sendEmail(
      YOUR_EMAIL,
      "You have a new message from your contact form!",
      `
        <div>
          <p>You have received a new message:</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>From:</strong> ${name} (${email})</p>
        </div>
      `
    );

    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message }), {
      status: 500,
    });
  }
});
