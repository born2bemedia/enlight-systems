#!/usr/bin/env node

function parseArgs(argv) {
  const result = {};

  for (const arg of argv) {
    if (!arg.startsWith("--")) continue;
    const [key, value = ""] = arg.slice(2).split("=");
    result[key] = value;
  }

  return result;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const slug = args.slug?.trim();
  const title = args.title?.trim();
  const excerpt = args.excerpt?.trim() || "";
  const secret = process.env.ADMIN_NOTIFY_SECRET?.trim();
  const baseUrl = (
    process.env.NOTIFY_API_URL || "https://enlight.systems"
  ).replace(/\/$/, "");

  if (!secret) {
    console.error("Missing ADMIN_NOTIFY_SECRET in environment.");
    process.exit(1);
  }

  if (!slug) {
    console.error(
      'Usage: npm run notify-article -- --slug=article-slug --title="Article title" [--excerpt="Short text"]'
    );
    process.exit(1);
  }

  const response = await fetch(
    `${baseUrl}/api/send-emails?secret=${encodeURIComponent(secret)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug,
        ...(title ? { title } : {}),
        ...(excerpt ? { excerpt } : {}),
      }),
    }
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error(`Request failed (${response.status})`);
    console.error(JSON.stringify(data, null, 2));
    process.exit(1);
  }

  console.log(JSON.stringify(data, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
