export async function submitForm(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  return response.json();
}

export function submitDomainCheck({ domain, source, toolType }) {
  return submitForm("/api/domain", {
    domain,
    source,
    toolType,
  });
}

export function submitLandingAudit({ url, source, toolType }) {
  return submitForm("/api/landing-audit", {
    url,
    source,
    toolType,
  });
}
