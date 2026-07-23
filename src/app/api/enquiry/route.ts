import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/enquiry-schema";
import { EnquiryEmail } from "@/emails/enquiry-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data.", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { fullName, email, phone, message } = parsed.data;
    const to = process.env.ENQUIRY_TO_EMAIL;
    const from =
      process.env.ENQUIRY_FROM_EMAIL ??
      "Apex Enquiries <onboarding@resend.dev>";

    if (!to) {
      return NextResponse.json(
        { error: "Enquiry recipient is not configured." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Apex enquiry from ${fullName}`,
      react: EnquiryEmail({ fullName, email, phone, message }),
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to send enquiry." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
