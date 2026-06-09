export const SPAM_CHECK_SOURCES = [
  { source: "APWG", message: "Not reported for phishing" },
  { source: "DNSFilter", message: "Not blocked by filter" },
  { source: "IPQS", message: "No Suspicious Activities found" },
  { source: "IQ Global", message: "No indications found" },
  { source: "Maltiverse", message: "Unknown" },
  { source: "Pulsedive", message: "Unknown" },
  { source: "Quad9", message: "NO malware reported" },
  { source: "Scamadviser", message: "Normal trust score" },
];

export function formatDomainLabel(domain) {
  const value = (domain || "").trim();
  if (!value) return "";

  return value
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "")
    .replace(/^www\./i, "")
    .trim();
}

const STATUS_LABELS = {
  safe: "SAFE!",
  warning: "CAUTION",
  unsafe: "RISK",
};

function getThreatCount(trustData) {
  if (!trustData) return 0;
  return (
    trustData?.dnsblock?.threat?.count ??
    trustData?.["dnsblock.threat.count"] ??
    0
  );
}

export function formatScamadviserMessage(score, blacklisted, stale) {
  if (blacklisted) {
    return "Domain is blacklisted";
  }

  if (score === null || score === undefined) {
    return "No trust data available";
  }

  if (stale) {
    return `Trust score ${score}/100 (data may be outdated)`;
  }

  if (score >= 75) {
    return `Normal trust score (${score}/100)`;
  }

  if (score >= 50) {
    return `Moderate trust score (${score}/100)`;
  }

  return `Low trust score (${score}/100)`;
}

export function resolveTrustStatus(score, blacklisted) {
  if (blacklisted || (typeof score === "number" && score < 50)) {
    return "unsafe";
  }

  if (typeof score === "number" && score < 75) {
    return "warning";
  }

  return "safe";
}

export function mapTrustToCheckResult(domain, trustData, options = {}) {
  const label = formatDomainLabel(domain) || "your-domain.com";
  const score =
    typeof trustData?.score === "number" ? trustData.score : null;
  const blacklisted = Boolean(trustData?.blacklisted);
  const stale =
    Boolean(options.stale) || trustData?.score_status === "outdated";
  const status = resolveTrustStatus(score, blacklisted);
  const scamadviserMessage = formatScamadviserMessage(score, blacklisted, stale);
  const threatCount = getThreatCount(trustData);

  const sources = SPAM_CHECK_SOURCES.map((item) => {
    if (item.source === "Scamadviser") {
      return { ...item, message: scamadviserMessage };
    }

    if (item.source === "DNSFilter" && threatCount > 0) {
      return { ...item, message: "Threat indicators found" };
    }

    if (item.source === "Quad9" && threatCount > 0) {
      return { ...item, message: "Malware or threat reported" };
    }

    return { ...item };
  });

  return {
    domain: label,
    trustScore: score,
    status,
    statusLabel: STATUS_LABELS[status],
    sources,
    scamadviser: trustData
      ? {
          score,
          blacklisted,
          stale,
          message: scamadviserMessage,
        }
      : null,
  };
}
