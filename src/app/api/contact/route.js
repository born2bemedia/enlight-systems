import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      name,
      email,
      phone,
      message,
    } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply@enlight.business", // Your Gmail email
        pass: "jem5uqk_RMZ@muk!udv", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false // This bypasses the certificate validation
      }
    });

    // Set up email data
    const mailOptions = {
      from: '"Enlight Business" <noreply@enlight.business>', // Sender address
      to: "noreply@enlight.business", // Change to your recipient's email
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
