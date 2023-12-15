import type { NextApiRequest, NextApiResponse } from "next";
import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_KEY!,
  domain: "sima.dev",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = JSON.parse(req.body);

  if (!email) {
    res.status(400).json({ error: "Missing body parameter" });
    return;
  }

  mg.messages().send({
    to: process.env.CONTACT_EMAIL!,
    from: email,
    subject: "Contact from sima.dev",
    text: email,
  });

  res.status(200).json({ success: true });
}
