import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import ContactEmailTemplate from "@/components/emails-templates/ContactEmailTemplate";
import getEnv from "@/utils/getEnv";

const resend = new Resend(getEnv(process.env.RESEND_API_KEY, "RESEND_API_KEY"));
const recipientEmail = getEnv(process.env.RECIPIENT_EMAIL, "RECIPIENT_EMAIL");

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email({ message: "Valid email is required" }),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: [recipientEmail],
      subject: `New Contact Form Submission by ${name}, ${email}`,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
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
