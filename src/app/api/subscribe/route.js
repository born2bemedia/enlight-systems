import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { email } = bodyJSON;

    if (!email?.trim()) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await sendMail({
      subject: "Resources newsletter subscription",
      text: `Email: ${email.trim()}\n`,
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
