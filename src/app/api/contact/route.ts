import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";

// Instantiated lazily so builds don't require MAILGUN_KEY to be set.
function getClient() {
  const key = process.env.MAILGUN_KEY;
  if (!key) return null;
  return new Mailgun(FormData).client({ username: "api", key });
}

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const mg = getClient();
  if (!mg) {
    return NextResponse.json({ success: false }, { status: 500 });
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
