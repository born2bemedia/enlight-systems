"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STORAGE_PREFIX = "enlight-article-views:";

function formatViews(count) {
  return new Intl.NumberFormat("en-US").format(count);
}

function ArticleViews({ slug, initialViews = 0 }) {
  const [views, setViews] = useState(null);
  const incremented = useRef(false);

  useEffect(() => {
    if (incremented.current) return;
    incremented.current = true;

    const key = `${STORAGE_PREFIX}${slug}`;
    const stored = localStorage.getItem(key);
    const current =
      stored === null ? initialViews : Math.max(Number(stored) || 0, initialViews);
    const next = current + 1;

    localStorage.setItem(key, String(next));
    setViews(next);
  }, [slug, initialViews]);

  return (
    <div className="single-post-top__meta-row">
      <Image
        src="/images/resources/icon-eye.svg"
        width={24}
        height={24}
        alt=""
        aria-hidden
      />
      <span>{views !== null ? formatViews(views) : "—"}</span>
    </div>
  );
}

export default ArticleViews;
