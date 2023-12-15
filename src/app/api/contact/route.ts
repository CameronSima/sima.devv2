import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import mailgun from "mailgun-js";
import { reportWebVitals } from "next/dist/build/templates/pages";

const mg = mailgun({
  apiKey: process.env.MAILGUN_KEY!,
  domain: "sima.dev",
});

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ success: false });
  }

  mg.messages().send({
    to: process.env.CONTACT_EMAIL!,
    from: email,
    subject: "Contact from sima.dev",
    text: email,
  });

  return NextResponse.json({ success: true });
}
