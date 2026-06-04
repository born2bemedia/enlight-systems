import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const {
      solution,
      name,
      email,
      phone,
      projectType,
      projectDescription,
      currentChallenges,
    } = bodyJSON;

    if (solution) {
      await sendMail({
        subject: "Crypto marketing assistance request",
        text: `Name: ${name}\nEmail: ${email}\nSolution: ${solution}\nPhone: ${phone}\nProject Type: ${projectType}\nProject Description: ${projectDescription}\nCurrent Challenges: ${currentChallenges}\n`,
      });

      const htmlEmail = `
      <html>
      <body>
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
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
                <p style="text-align: left; font-size: 16px;font-weight: 600;">
                  Thank you for choosing Enlight for your crypto marketing needs!
                </p>
                <p style="text-align: left; font-size: 16px">
                   We have received your order for <span style="color: #333CEF;font-weight: 600;">${solution}</span>, and we're excited to get started. Our team is currently reviewing your order, and we'll be in touch with you shortly to discuss the next steps and finalise the details.<br><br>

                    If you have any questions in the meantime, please feel free to reach out to us at <a style="color: #333CEF;font-weight: 600;" href="mailto:info@enlight.systems">info@enlight.systems</a>.<br>
                    We look forward to working with you and helping you achieve your marketing goals!
                </p>
                
                <h2 style="text-align: left; font-size: 16px">
                    Best regards,<br />
                    Enlight Team
                </h2>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td style="padding: 24px; background-color: #0E0E0E;color: #FFFFFF; font-size: 20px; text-align: center;">
                Thanks for using
              <a href="https://Enlight.systems" style="text-decoration: none; color: #97D80F; font-size: 20px; ">Enlight.systems</a>
            </td>
          </tfoot>
        </table>
      </body>
    </html>
    `;

      await sendMail({
        to: email,
        subject: "Enlight Order Confirmation",
        html: htmlEmail,
      });
    } else {
      await sendMail({
        subject: "Crypto marketing assistance request",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nProject Description: ${projectDescription}\nCurrent Challenges: ${currentChallenges}\n`,
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
                   Thank you for reaching out to us! We have received your request to get started with Enlight, and we're thrilled to assist you. Our team is currently reviewing your request, and we'll be in touch with you shortly to discuss the next steps and get you started with our services.<br><br>

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
        subject: "Getting Started Request Received",
        html: htmlEmail,
      });
    }

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
