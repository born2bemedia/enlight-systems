import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { answers, recommendedPlan } = bodyJSON;

    await sendMail({
      subject: "Pricing setup finder submission",
      text: [
        `Recommended plan: ${recommendedPlan || "n/a"}`,
        "",
        "Answers:",
        JSON.stringify(answers || {}, null, 2),
        "",
        `Submitted at: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
