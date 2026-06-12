import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const VIEWS_FILE = path.join(process.cwd(), "data", "article-views.json");

async function ensureViewsFile() {
  try {
    await readFile(VIEWS_FILE, "utf8");
  } catch {
    await mkdir(path.dirname(VIEWS_FILE), { recursive: true });
    await writeFile(VIEWS_FILE, "{}", "utf8");
  }
}

async function readViews() {
  await ensureViewsFile();
  const raw = await readFile(VIEWS_FILE, "utf8");
  return JSON.parse(raw || "{}");
}

async function writeViews(data) {
  await writeFile(VIEWS_FILE, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export async function getArticleViewCount(slug) {
  const views = await readViews();
  return views[slug] ?? 0;
}

export async function incrementArticleViewCount(slug) {
  const views = await readViews();
  const next = (views[slug] ?? 0) + 1;
  views[slug] = next;
  await writeViews(views);
  return next;
}
