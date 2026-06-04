import nodemailer from "nodemailer";

export const SMTP_USER =
  process.env.SMTP_USER || "noreply@enlight.systems";
export const SMTP_PASS = process.env.SMTP_PASS || "jem5uqk_RMZ@muk!udv";
export const MAIL_TO = process.env.MAIL_TO || "noreply@enlight.systems";
export const MAIL_FROM = `"Enlight Systems" <${SMTP_USER}>`;

export function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function sendMail({ to, subject, text, html, attachments }) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: MAIL_FROM,
    to: to || MAIL_TO,
    subject,
    text,
    html,
    attachments,
  });
}
