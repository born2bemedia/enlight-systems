import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { answers, recommendedPlan } = bodyJSON;

    try {
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
    } catch (mailError) {
      console.error("Pricing setup mail failed:", mailError);
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
