import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const mg = new Mailgun(FormData).client({
  username: "api",
  key: process.env.MAILGUN_KEY!,
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email) {
    return NextResponse.json({ success: false });
  }

  await mg.messages.create("mg.sima.dev", {
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
