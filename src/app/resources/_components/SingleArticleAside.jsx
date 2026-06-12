"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SCROLL_OFFSET = 160;

function SingleArticleAside({ toc }) {
  const [activeId, setActiveId] = useState(toc[0]?.id ?? "");

  useEffect(() => {
    if (!toc?.length) return;

    const updateActive = () => {
      let current = toc[0].id;

      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = item.id;
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        current = toc[toc.length - 1].id;
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [toc]);

  if (!toc?.length) return null;

  const handleClick = (event, id) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET + 8;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <aside className="single-post-aside" aria-label="Article sections">
      <nav>
        <ul>
          {toc.map((item) => (
            <li
              key={item.id}
              className={activeId === item.id ? "is-active" : undefined}
            >
              <Link
                href={`#${item.id}`}
                onClick={(event) => handleClick(event, item.id)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SingleArticleAside;
