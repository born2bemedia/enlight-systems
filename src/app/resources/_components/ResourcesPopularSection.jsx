"use client";

import { useState } from "react";
import ResourceCard from "./ResourceCard";

const VISIBLE_COUNT = 3;

const ExpandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path d="M12 16.5L5.5 10H18.5L12 16.5Z" fill="#0F0F0F" />
  </svg>
);

function ResourcesPopularSection({ articles = [] }) {
  const [expanded, setExpanded] = useState(false);
  const primaryArticles = articles.slice(0, VISIBLE_COUNT);
  const hiddenArticles = articles.slice(VISIBLE_COUNT);
  const hasMore = hiddenArticles.length > 0;

  if (!articles.length) {
    return null;
  }

  return (
    <div className="resources-popular-section">
      <div className="resources-popular-grid">
        {primaryArticles.map((item) => (
          <ResourceCard
            key={item.slug}
            title={item.title}
            image={item.image}
            slug={item.slug}
          />
        ))}
      </div>

      {hasMore && (
        <>
          <div
            className={`resources-popular-more${
              expanded ? " is-open" : ""
            }`}
          >
            <div className="resources-popular-more__inner">
              <div className="resources-popular-grid resources-popular-more__grid">
                {hiddenArticles.map((item) => (
                  <ResourceCard
                    key={item.slug}
                    title={item.title}
                    image={item.image}
                    slug={item.slug}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className={`resources-popular-expand${
              expanded ? " is-expanded" : ""
            }`}
          >
            <button
              type="button"
              className={`resources-popular-expand__btn${
                expanded ? " is-expanded" : ""
              }`}
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              aria-label={
                expanded ? "Show fewer articles" : "Show more articles"
              }
            >
              <ExpandIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ResourcesPopularSection;
