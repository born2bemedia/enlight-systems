import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "src/lib/content");

export async function getPost(slug) {
  const text = await readFile(path.join(CONTENT_DIR, `${slug}.md`), "utf8");
  const {
    content,
    data: {
      title,
      seo_title,
      image,
      seo_description,
      date = "",
      views = "",
      toc = [],
      hero_width = 700,
      hero_height = 538,
    },
  } = matter(text);
  const body = marked(content);
  return {
    slug,
    title,
    image,
    heroWidth: hero_width,
    heroHeight: hero_height,
    seo_title,
    seo_description,
    date,
    views,
    toc,
    body,
  };
}

export async function getSlugs() {
  const files = await readdir(CONTENT_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
