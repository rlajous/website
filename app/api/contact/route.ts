import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emails-templates/ContactEmailTemplate";
import getEnv from "@/utils/getEnv";

const resend = new Resend(getEnv(process.env.RESEND_API_KEY, "RESEND_API_KEY"));
const recipientEmail = getEnv(process.env.RECIPIENT_EMAIL, "RECIPIENT_EMAIL");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: [recipientEmail],
      subject: `New Contact Form Submission by ${name}, ${email}`,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
