import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { email } = bodyJSON;

    if (!email?.trim()) {
      return NextResponse.status(400).json({ message: "Email is required" });
    }

    await sendMail({
      subject: "Crypto marketing guide request",
      text: `Email: ${email.trim()}\n`,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
