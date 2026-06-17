/**
 * Client helper for the website-analysis Python backend.
 *
 * All requests target the REST API exposed at `NEXT_PUBLIC_API_BASE_URL`.
 * The base URL is read from the environment so it can differ per deployment.
 *
 * @typedef {Object} TrustFactor
 * @property {string} name
 * @property {number} score
 * @property {number} weight
 * @property {number} contribution
 * @property {string} explanation
 *
 * @typedef {Object} TrustCheckResponse
 * @property {string} domain
 * @property {number} trust_score
 * @property {"low"|"medium"|"high"} risk_level
 * @property {TrustFactor[]} factors
 *
 * @typedef {Object} SiteReportCreateResponse
 * @property {string} job_id
 * @property {"pending"|"processing"|"done"|"failed"} status
 * @property {boolean} cached
 *
 * @typedef {Object} ScoredSection
 * @property {string} section_type
 * @property {string} section_label
 * @property {number} score
 * @property {string[]} top_issues
 * @property {string[]} top_fixes
 *
 * @typedef {Object} SiteReportResult
 * @property {string} report_id
 * @property {string} url
 * @property {string} domain
 * @property {number} overall_score
 * @property {string} summary
 * @property {ScoredSection[]} sections
 * @property {unknown[]} markers
 * @property {unknown[]} extracted_sections
 * @property {string} [desktop_screenshot_url]
 * @property {string} [mobile_screenshot_url]
 *
 * @typedef {Object} SiteReportStatusResponse
 * @property {"pending"|"processing"|"done"|"failed"} status
 * @property {SiteReportResult} [report]
 * @property {string} [html_url]
 * @property {string} [pdf_url]
 * @property {string|null} [error]
 */

/**
 * Resolve and validate the backend base URL.
 * Throws a clear, actionable error when the env var is missing so the failure
 * surfaces in the UI instead of producing an opaque network error.
 *
 * @returns {string} Base URL without a trailing slash.
 */
function resolveBaseUrl() {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!base) {
    throw new Error(
      "Analysis service is not configured. Set NEXT_PUBLIC_API_BASE_URL in your environment."
    );
  }

  return base.replace(/\/+$/, "");
}

/**
 * Extract a human-readable message from a non-OK response.
 *
 * @param {Response} response
 * @returns {Promise<string>}
 */
async function readErrorMessage(response) {
  try {
    const data = await response.json();
    const message = data?.detail || data?.error || data?.message;
    if (typeof message === "string" && message.trim()) {
      return message;
    }
  } catch {
    // Body was not JSON — fall through to the generic message.
  }

  return `Request failed (${response.status})`;
}

/**
 * @param {string} path
 * @param {RequestInit} [init]
 */
async function request(path, init) {
  const response = await fetch(`${resolveBaseUrl()}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}

/**
 * Resolve an asset URL returned by the backend (screenshots, report files).
 * Absolute URLs (e.g. a public bucket) are returned unchanged; relative paths
 * are joined onto the API base URL so they don't resolve against the frontend
 * origin (which on Vercel has no /storage directory).
 *
 * @param {string|null|undefined} url
 * @returns {string|null}
 */
export function resolveAssetUrl(url) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return `${resolveBaseUrl()}${url.startsWith("/") ? "" : "/"}${url}`;
}

/**
 * POST /api/v1/trust-check
 *
 * @param {string} domain Normalized domain, e.g. "example.com".
 * @returns {Promise<TrustCheckResponse>}
 */
export function requestTrustCheck(domain) {
  return request("/api/v1/trust-check", {
    method: "POST",
    body: JSON.stringify({ domain }),
  });
}

/**
 * POST /api/v1/site-report — enqueue an analysis job.
 *
 * @param {string} url Absolute URL, e.g. "https://example.com".
 * @returns {Promise<SiteReportCreateResponse>}
 */
export function createSiteReport(url) {
  return request("/api/v1/site-report", {
    method: "POST",
    body: JSON.stringify({ url }),
  });
}

/**
 * GET /api/v1/site-report/{job_id} — poll job status.
 *
 * @param {string} jobId
 * @returns {Promise<SiteReportStatusResponse>}
 */
export function getSiteReportStatus(jobId) {
  return request(`/api/v1/site-report/${encodeURIComponent(jobId)}`, {
    method: "GET",
  });
}
