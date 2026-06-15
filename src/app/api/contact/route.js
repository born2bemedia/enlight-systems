import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { assistance, problem, name, email, phone, reply, messanger, file } =
      bodyJSON;

    const attachments = [];

    if (file) {
      attachments.push({
        filename: file.filename,
        content: file.base64,
        encoding: "base64",
      });
    }

    await sendMail({
      subject: "Crypto marketing assistance request",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessanger: ${messanger}\nNeed assistance with: ${assistance}\nProblem: ${problem}\nReply: ${reply}\n`,
      attachments,
    });

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

    await sendMail({
      to: email,
      subject: "Your Request Has Been Received",
      html: htmlEmail,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
