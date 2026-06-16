import sgMail from "@sendgrid/mail";
import nodemailer from "nodemailer";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY?.trim() || "";
const SMTP_USER = process.env.SMTP_USER?.trim() || "";
const SMTP_PASS = process.env.SMTP_PASS?.trim() || "";

export const MAIL_TO =
  process.env.MAIL_TO?.trim() || "info@enlight.business";

const MAIL_FROM_RAW =
  process.env.MAIL_FROM?.trim() || SMTP_USER || "noreply@enlight.systems";

const MAIL_FROM_NAME = "Enlight Systems";

function parseFromAddress() {
  const match = MAIL_FROM_RAW.match(/^(.+?)\s*<([^>]+)>$/);
  if (match) {
    return { name: match[1].replace(/^"|"$/g, ""), email: match[2] };
  }
  return { name: MAIL_FROM_NAME, email: MAIL_FROM_RAW };
}

export function isSendGridConfigured() {
  return Boolean(SENDGRID_API_KEY);
}

function createSmtpTransporter() {
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

async function sendWithSendGrid({ to, subject, text, html, attachments }) {
  sgMail.setApiKey(SENDGRID_API_KEY);
  const from = parseFromAddress();

  const message = {
    to: to || MAIL_TO,
    from,
    subject,
    text,
    html,
  };

  if (attachments?.length) {
    message.attachments = attachments.map((file) => ({
      content: file.content,
      filename: file.filename,
      type: file.mimetype || "application/octet-stream",
      disposition: "attachment",
    }));
  }

  await sgMail.send(message);
}

async function sendWithSmtp({ to, subject, text, html, attachments }) {
  const transporter = createSmtpTransporter();
  const from = parseFromAddress();

  await transporter.sendMail({
    from: `"${from.name}" <${from.email}>`,
    to: to || MAIL_TO,
    subject,
    text,
    html,
    attachments,
  });
}

export async function sendMail({ to, subject, text, html, attachments }) {
  if (isSendGridConfigured()) {
    await sendWithSendGrid({ to, subject, text, html, attachments });
    return;
  }

  await sendWithSmtp({ to, subject, text, html, attachments });
}

const SEND_DELAY_MS = 120;

export function getSendDelayMs() {
  return SEND_DELAY_MS;
}

export async function sendMailToMany({ recipients, subject, text, html }) {
  let sent = 0;
  let failed = 0;
  const errors = [];

  for (const email of recipients) {
    try {
      await sendMail({ to: email, subject, text, html });
      sent += 1;
    } catch (error) {
      failed += 1;
      errors.push({ email, message: error.message });
      console.error(`Failed to send to ${email}:`, error);
    }

    if (SEND_DELAY_MS > 0) {
      await new Promise((resolve) => setTimeout(resolve, SEND_DELAY_MS));
    }
  }

  return { sent, failed, errors };
}
