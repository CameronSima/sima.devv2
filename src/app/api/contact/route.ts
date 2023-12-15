import { NextRequest, NextResponse } from "next/server";
import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_KEY!,
  domain: "mg.sima.dev",
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email) {
    return NextResponse.json({ success: false });
  }

  mg.messages().send({
    to: "cjsima@gmail.com",
    from: "contact@sima.dev",
    subject: "Contact from sima.dev",
    text: `
      Name: ${name} 
      Email: ${email}
      Message: ${message}
    `,
  });

  return NextResponse.json({ success: true });
}
