import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const VIEWS_FILE = path.join(process.cwd(), "data", "article-views.json");
const REDIS_KEY_PREFIX = "article-views:";

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

function redisKey(slug) {
  return `${REDIS_KEY_PREFIX}${slug}`;
}

async function redisRequest(pathSuffix) {
  const config = getRedisConfig();
  if (!config) return null;

  const response = await fetch(`${config.url}${pathSuffix}`, {
    headers: { Authorization: `Bearer ${config.token}` },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Redis request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.result;
}

async function ensureViewsFile() {
  try {
    await readFile(VIEWS_FILE, "utf8");
  } catch {
    await mkdir(path.dirname(VIEWS_FILE), { recursive: true });
    await writeFile(VIEWS_FILE, "{}", "utf8");
  }
}

async function readViewsFile() {
  await ensureViewsFile();
  const raw = await readFile(VIEWS_FILE, "utf8");
  return JSON.parse(raw || "{}");
}

async function writeViewsFile(data) {
  await writeFile(VIEWS_FILE, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function seedRedisFromFile(slug) {
  const views = await readViewsFile();
  const seed = views[slug] ?? 0;

  if (seed > 0) {
    const key = encodeURIComponent(redisKey(slug));
    await redisRequest(`/set/${key}/${seed}`);
    return seed;
  }

  return 0;
}

async function getRedisViewCount(slug) {
  const key = encodeURIComponent(redisKey(slug));
  const value = await redisRequest(`/get/${key}`);

  if (value === null) {
    return seedRedisFromFile(slug);
  }

  return Number(value) || 0;
}

async function incrementRedisViewCount(slug) {
  const key = encodeURIComponent(redisKey(slug));
  const existing = await redisRequest(`/get/${key}`);

  if (existing === null) {
    await seedRedisFromFile(slug);
  }

  const next = await redisRequest(`/incr/${key}`);
  return Number(next) || 0;
}

function useRedis() {
  return Boolean(getRedisConfig());
}

async function getFileViewCount(slug) {
  const views = await readViewsFile();
  return views[slug] ?? 0;
}

export async function getArticleViewCount(slug) {
  if (useRedis()) {
    return getRedisViewCount(slug);
  }

  return getFileViewCount(slug);
}

export async function incrementArticleViewCount(slug) {
  if (useRedis()) {
    return incrementRedisViewCount(slug);
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Article views storage is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in production."
    );
  }

  const views = await readViewsFile();
  const next = (views[slug] ?? 0) + 1;
  views[slug] = next;
  await writeViewsFile(views);
  return next;
}
