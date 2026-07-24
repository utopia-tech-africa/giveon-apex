import { NextResponse } from "next/server";
import { Resend } from "resend";
import { WaitlistEmail } from "@/emails/waitlist-email";
import { getWaitlistPriceLabel } from "@/lib/waitlist-options";
import { waitlistSchema } from "@/lib/waitlist-schema";
import { saveWaitlistContact } from "@/lib/waitlist-contacts";

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
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data.", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { fullName, country, email, priceRange } = parsed.data;
    const to = process.env.ENQUIRY_TO_EMAIL;
    const from =
      process.env.ENQUIRY_FROM_EMAIL ??
      "Apex Enquiries <onboarding@resend.dev>";

    if (!to) {
      return NextResponse.json(
        { error: "Waitlist recipient is not configured." },
        { status: 500 },
      );
    }

    const priceLabel = getWaitlistPriceLabel(priceRange);

    try {
      await saveWaitlistContact({
        fullName,
        email,
        country,
        priceRangeLabel: priceLabel,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to save waitlist signup.";
      return NextResponse.json({ error: message }, { status: 502 });
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Apex Cabins waitlist signup from ${fullName}`,
      react: WaitlistEmail({
        fullName,
        country,
        email,
        priceRange: priceLabel,
      }),
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to join waitlist." },
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
