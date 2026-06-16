import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  redisGet,
  redisSadd,
  redisSet,
  redisSmembers,
  useRedis,
} from "@/src/lib/redis";

const SUBSCRIBERS_KEY = "article-subscribers";
const NOTIFIED_PREFIX = "article-notified:";
const LOCAL_SUBSCRIBERS_FILE = path.join(
  process.cwd(),
  "data",
  "article-subscribers.json"
);
const LOCAL_NOTIFIED_FILE = path.join(
  process.cwd(),
  "data",
  "article-notified.json"
);

function normalizeEmail(email) {
  return email?.trim().toLowerCase() || "";
}

async function readLocalSubscribers() {
  try {
    const raw = await readFile(LOCAL_SUBSCRIBERS_FILE, "utf8");
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeLocalSubscribers(emails) {
  await writeFile(
    LOCAL_SUBSCRIBERS_FILE,
    `${JSON.stringify(emails, null, 2)}\n`,
    "utf8"
  );
}

async function readLocalNotified() {
  try {
    const raw = await readFile(LOCAL_NOTIFIED_FILE, "utf8");
    const parsed = JSON.parse(raw || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

async function writeLocalNotified(data) {
  await writeFile(LOCAL_NOTIFIED_FILE, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function notifiedKey(slug) {
  return `${NOTIFIED_PREFIX}${slug}`;
}

export async function addArticleSubscriber(email) {
  const normalized = normalizeEmail(email);
  if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    throw new Error("Invalid email");
  }

  if (useRedis()) {
    await redisSadd(SUBSCRIBERS_KEY, normalized);
    return normalized;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("Redis is not configured in production.");
  }

  const subscribers = await readLocalSubscribers();
  if (!subscribers.includes(normalized)) {
    subscribers.push(normalized);
    await writeLocalSubscribers(subscribers);
  }

  return normalized;
}

export async function getArticleSubscribers() {
  if (useRedis()) {
    const emails = await redisSmembers(SUBSCRIBERS_KEY);
    return emails.filter((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }

  return readLocalSubscribers();
}

export async function isArticleNotified(slug) {
  if (!slug) return false;

  if (useRedis()) {
    const value = await redisGet(notifiedKey(slug));
    return value === "1";
  }

  const notified = await readLocalNotified();
  return Boolean(notified[slug]);
}

export async function markArticleNotified(slug) {
  if (!slug) return;

  if (useRedis()) {
    await redisSet(notifiedKey(slug), "1");
    return;
  }

  const notified = await readLocalNotified();
  notified[slug] = true;
  await writeLocalNotified(notified);
}
