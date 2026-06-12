"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function formatViews(count) {
  return new Intl.NumberFormat("en-US").format(count);
}

function ArticleViews({ slug, initialViews = 0 }) {
  const [views, setViews] = useState(initialViews);
  const incremented = useRef(false);

  useEffect(() => {
    if (incremented.current) return;
    incremented.current = true;

    fetch(`/api/articles/${slug}/views`, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data.views === "number") {
          setViews(data.views);
        }
      })
      .catch(() => {});
  }, [slug]);

  return (
    <div className="single-post-top__meta-row">
      <Image
        src="/images/resources/icon-eye.svg"
        width={24}
        height={24}
        alt=""
        aria-hidden
      />
      <span>{formatViews(views)}</span>
    </div>
  );
}

export default ArticleViews;
