import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const VIEWS_FILE = path.join(process.cwd(), "data", "article-views.json");
const REDIS_KEY_PREFIX = "article-views:";

function getRedisConfig() {
  const url = (
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || ""
  ).trim();
  const token = (
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || ""
  ).trim();

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

async function readViewsFile() {
  try {
    const raw = await readFile(VIEWS_FILE, "utf8");
    return JSON.parse(raw || "{}");
  } catch {
    return {};
  }
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

export async function getArticleViewCount(slug) {
  try {
    if (useRedis()) {
      return await getRedisViewCount(slug);
    }

    const views = await readViewsFile();
    return views[slug] ?? 0;
  } catch (error) {
    console.error("getArticleViewCount failed:", error);
    const views = await readViewsFile();
    return views[slug] ?? 0;
  }
}

export async function incrementArticleViewCount(slug) {
  try {
    if (useRedis()) {
      return await incrementRedisViewCount(slug);
    }

    if (process.env.NODE_ENV === "production") {
      throw new Error("Redis is not configured in production.");
    }

    const views = await readViewsFile();
    const next = (views[slug] ?? 0) + 1;
    views[slug] = next;
    await writeViewsFile(views);
    return next;
  } catch (error) {
    console.error("incrementArticleViewCount failed:", error);
    throw error;
  }
}
