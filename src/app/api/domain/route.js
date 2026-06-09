import { NextResponse } from "next/server";
import { sendMail } from "@/src/lib/mail";
import { formatDomainLabel } from "@/src/lib/domainCheckData";
import {
  getScamadviserTrust,
  mapTrustToCheckResult,
} from "@/src/lib/scamadviser";

export async function POST(request) {
  try {
    const bodyJSON = JSON.parse(await request.text());
    const { domain, source = "Website", toolType = "domain-check" } = bodyJSON;
    const normalizedDomain = formatDomainLabel(domain);

    if (!normalizedDomain) {
      return NextResponse.json({ message: "Domain is required" }, { status: 400 });
    }

    let checkResult = mapTrustToCheckResult(normalizedDomain, null);

    try {
      const trustResponse = await getScamadviserTrust(normalizedDomain);

      if (trustResponse?.data) {
        checkResult = mapTrustToCheckResult(normalizedDomain, trustResponse.data, {
          stale: trustResponse.stale,
        });
      } else if (!process.env.SCAMADVISER_API_KEY) {
        checkResult = mapTrustToCheckResult(normalizedDomain, null);
        checkResult.sources = checkResult.sources.map((item) =>
          item.source === "Scamadviser"
            ? {
                ...item,
                message: "Live check unavailable (API key not configured)",
              }
            : item
        );
      }
    } catch (trustError) {
      console.error("Scamadviser trust lookup failed:", trustError);
      checkResult = mapTrustToCheckResult(normalizedDomain, null);
      checkResult.sources = checkResult.sources.map((item) =>
        item.source === "Scamadviser"
          ? { ...item, message: "Could not retrieve trust score" }
          : item
      );
      checkResult.apiError = true;
    }

    try {
      await sendMail({
        subject: `Domain check request: ${normalizedDomain}`,
        text: [
          `Domain: ${normalizedDomain}`,
          `Source: ${source}`,
          `Tool: ${toolType}`,
          `Trust score: ${checkResult.trustScore ?? "n/a"}`,
          `Status: ${checkResult.status}`,
          `Scamadviser: ${
            checkResult.sources.find((item) => item.source === "Scamadviser")
              ?.message || "n/a"
          }`,
          `Submitted at: ${new Date().toISOString()}`,
        ].join("\n"),
      });
    } catch (mailError) {
      console.error("Domain check mail failed:", mailError);
    }

    return NextResponse.json(checkResult);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "COULD NOT PROCESS DOMAIN CHECK" },
      { status: 500 }
    );
  }
}
