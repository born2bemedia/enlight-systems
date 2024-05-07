import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { assistance, problem, name, email, phone, reply, messanger, file } =
      bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply@enlight.systems", // Your Gmail email
        pass: "jem5uqk_RMZ@muk!udv", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    const attachments = [];

    if (file) {
      // Add the file attachment
      attachments.push({
        filename: file.filename, // Use the actual filename from the client
        content: file.base64, // Base64 encoded data
        encoding: 'base64'
      });
    }

    const mailOptions = {
      from: '"Enlight Systems" <noreply@enlight.systems>', // Sender address
      to: "noreply@enlight.systems", // Change to your recipient's email
      subject: "Crypto marketing assistance request",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessanger: ${messanger}\nNeed assistance with: ${assistance}\nProblem: ${problem}\nReply: ${reply}\n`,
      attachments: attachments,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    const htmlEmail = `
  <html>
    <body>
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-family: sans-serif">
        <thead>
          <tr>
            <td>
              <img style="width: 100%" src="https://enlight.systems/images/email-head.png" />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 40px">
              <h2 style="text-align: left; font-size: 20px">Dear ${name},</h2>
              <p style="text-align: left; font-size: 16px">
              Thank you for reaching out to us through our Quick Contact form!<br><br>

              We have successfully received your request, and we're already coordinating it with the appropriate expert from our team. They will be in touch with you shortly to assist you with your query.

                  If you have any urgent questions or concerns, please feel free to contact us at <a href="mailto:info@enlight.systems">info@enlight.systems</a>.<br><br>

                  We appreciate your interest in Enlight, and we look forward to working with you!
              </p>
              
              <h2 style="text-align: left; font-size: 16px">
                  Best regards,<br />
                  Enlight Team
              </h2>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style="padding: 24px; background-color: #0E0E0E; color: #FFFFFF; font-size: 20px; text-align: center;">
              Thanks for using
              <a href="https://Enlight.systems" style="text-decoration: none; color: #97D80F; font-size: 20px;">Enlight.systems</a>
            </td>
          </tr>
        </tfoot>
      </table>
    </body>
  </html>
  `;

    const mailOptionsUser = {
      from: '"Enlight Systems" <noreply@enlight.systems>', // Sender address
      to: email, // Change to your recipient's email
      subject: "Your Request Has Been Received",
      html: htmlEmail,
    };

    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
