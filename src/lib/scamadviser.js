import { formatDomainLabel } from "./domainCheckData";

export { mapTrustToCheckResult } from "./domainCheckData";

const SCAMADVISER_API_BASE = "https://api.scamadviser.cloud";

export async function getScamadviserTrust(domain) {
  const apiKey = process.env.SCAMADVISER_API_KEY;

  if (!apiKey) {
    return null;
  }

  const url = formatDomainLabel(domain);
  const query = new URLSearchParams({ apikey: apiKey, url });
  const requestInit = { cache: "no-store" };

  let response = await fetch(
    `${SCAMADVISER_API_BASE}/v3/url/get/cache?${query}`,
    requestInit
  );

  if (response.status === 404 || response.status === 503) {
    response = await fetch(
      `${SCAMADVISER_API_BASE}/v3/url/get?${query}`,
      requestInit
    );
  }

  if (response.status === 403) {
    throw new Error("Invalid Scamadviser API key");
  }

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const stale = response.status === 503;
    const data = await response.json().catch(() => null);

    if (stale && data) {
      return { data, stale: true };
    }

    throw new Error(`Scamadviser request failed (${response.status})`);
  }

  const data = await response.json();
  return { data, stale: false };
}
