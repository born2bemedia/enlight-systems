import { NextResponse } from "next/server";
import {
  getArticleSubscribers,
  isArticleNotified,
  markArticleNotified,
} from "@/src/lib/articleSubscribers";
import { buildArticleNotifyEmail } from "@/src/lib/articleNotifyEmail";
import { isArticleSlug } from "@/src/lib/articleSlugs";
import { isSendGridConfigured, sendMailToMany } from "@/src/lib/mail";
import { getPost } from "@/src/utils/blogUtils";

export const dynamic = "force-dynamic";

function getSecret(request) {
  const { searchParams } = new URL(request.url);
  return searchParams.get("secret")?.trim() || "";
}

function isAuthorized(secret) {
  const expected = process.env.ADMIN_NOTIFY_SECRET?.trim() || "";
  return Boolean(expected) && secret === expected;
}

export async function POST(request) {
  try {
    if (!isAuthorized(getSecret(request))) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!isSendGridConfigured()) {
      return NextResponse.json(
        { message: "SENDGRID_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const slug = body.slug?.trim();

    if (!slug || !isArticleSlug(slug)) {
      return NextResponse.json({ message: "Invalid article slug" }, { status: 400 });
    }

    if (await isArticleNotified(slug)) {
      return NextResponse.json(
        { message: "Notifications were already sent for this article" },
        { status: 409 }
      );
    }

    const post = await getPost(slug);
    const title = body.title?.trim() || post.title;
    const excerpt = body.excerpt?.trim() || post.seo_description || "";

    const subscribers = await getArticleSubscribers();
    if (!subscribers.length) {
      return NextResponse.json({
        message: "No subscribers found",
        sent: 0,
        failed: 0,
        slug,
      });
    }

    const { subject, text, html } = buildArticleNotifyEmail({
      title,
      excerpt,
      slug,
    });

    const result = await sendMailToMany({
      recipients: subscribers,
      subject,
      text,
      html,
    });

    if (result.sent > 0) {
      await markArticleNotified(slug);
    }

    return NextResponse.json({
      message: "Notifications processed",
      slug,
      subscribers: subscribers.length,
      ...result,
    });
  } catch (error) {
    console.error("send-emails failed:", error);
    return NextResponse.json(
      { message: "COULD NOT SEND EMAILS" },
      { status: 500 }
    );
  }
}
