import { NextResponse } from "next/server";
import { addArticleSubscriber } from "@/src/lib/articleSubscribers";
import { sendMail } from "@/src/lib/mail";

export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const email = bodyJSON.email?.trim().toLowerCase();

    if (!email || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { message: "Valid email is required" },
        { status: 400 }
      );
    }

    try {
      await addArticleSubscriber(email);
    } catch (storageError) {
      console.error("Subscriber storage failed:", storageError);
      return NextResponse.json(
        { message: "COULD NOT SAVE SUBSCRIPTION" },
        { status: 500 }
      );
    }

    try {
      await sendMail({
        subject: "Resources newsletter subscription",
        text: `New subscriber: ${email}\n`,
      });
    } catch (mailError) {
      console.error("Subscribe internal mail failed:", mailError);
    }

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "COULD NOT PROCESS REQUEST" },
      { status: 500 }
    );
  }
}
