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
      projectType,
      projectDescription,
      currentChallenges,
    } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply@enlight.systems", // Your Gmail email
        pass: "jem5uqk_RMZ@muk!udv", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false // This bypasses the certificate validation
      }
    });

    // Set up email data
    const mailOptions = {
      from: '"Enlight Systems" <noreply@enlight.systems>', // Sender address
      to: "noreply@enlight.systems", // Change to your recipient's email
      subject: "Crypto marketing assistance request",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nProject Description: ${projectDescription}\nCurrent Challenges: ${currentChallenges}\n`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
