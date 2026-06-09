import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";
import {
  formatPageUrl,
  getWebAnatomyAnalyzerUrl,
} from "@/src/lib/webAnatomy";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { url, source = "Website", toolType = "landing-audit" } = bodyJSON;
    const normalizedUrl = formatPageUrl(url);

    if (!normalizedUrl) {
      return NextResponse.json({ message: "URL is required" }, { status: 400 });
    }

    const reportUrl = getWebAnatomyAnalyzerUrl(normalizedUrl);

    try {
      await sendMail({
        subject: `Landing page audit request: ${normalizedUrl}`,
        text: [
          `URL: ${normalizedUrl}`,
          `Source: ${source}`,
          `Tool: ${toolType}`,
          `Web Anatomy report: ${reportUrl}`,
          `Submitted at: ${new Date().toISOString()}`,
        ].join("\n"),
      });
    } catch (mailError) {
      console.error("Landing audit mail failed:", mailError);
    }

    return NextResponse.json({
      url: normalizedUrl,
      reportUrl,
      provider: "webanatomy",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "COULD NOT PROCESS LANDING AUDIT REQUEST" },
      { status: 500 }
    );
  }
}
