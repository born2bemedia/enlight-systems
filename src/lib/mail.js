import nodemailer from "nodemailer";

export const SMTP_USER = process.env.SMTP_USER || "";
export const SMTP_PASS = process.env.SMTP_PASS || "";
export const MAIL_TO = process.env.MAIL_TO || SMTP_USER || "info@enlight.business";
export const MAIL_FROM = SMTP_USER
  ? `"Enlight Systems" <${SMTP_USER}>`
  : '"Enlight Systems" <noreply@enlight.systems>';

export function createTransporter() {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP credentials are not configured");
  }

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
