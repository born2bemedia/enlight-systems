import { NextResponse } from "next/server";
import {
  getArticleViewCount,
  incrementArticleViewCount,
} from "@/src/lib/articleViews";
import { getSlugs } from "@/src/utils/blogUtils";

let validSlugs = null;

async function isValidSlug(slug) {
  if (!validSlugs) {
    validSlugs = new Set(await getSlugs());
  }
  return validSlugs.has(slug);
}

export async function POST(_request, { params: { slug } }) {
  try {
    if (!(await isValidSlug(slug))) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    const views = await incrementArticleViewCount(slug);
    return NextResponse.json({ views });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Could not update views" },
      { status: 500 }
    );
  }
}

export async function GET(_request, { params: { slug } }) {
  try {
    if (!(await isValidSlug(slug))) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    const views = await getArticleViewCount(slug);
    return NextResponse.json({ views });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Could not read views" },
      { status: 500 }
    );
  }
}
