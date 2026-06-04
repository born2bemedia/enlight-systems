import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { domain, source = "Website", toolType = "domain-check" } = bodyJSON;

    if (!domain?.trim()) {
      return NextResponse.status(400).json({ message: "Domain is required" });
    }

    await sendMail({
      subject: `Domain check request: ${domain.trim()}`,
      text: [
        `Domain: ${domain.trim()}`,
        `Source: ${source}`,
        `Tool: ${toolType}`,
        `Submitted at: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
