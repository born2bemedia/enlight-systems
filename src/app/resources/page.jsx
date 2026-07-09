import React from "react";
import "@/public/scss/home-stats.scss";
import "@/public/scss/home-domain-form.scss";
import "@/public/scss/home-calculator-cta.scss";
import "@/public/scss/resources.scss";
import ResourcesHero from "./_components/ResourcesHero";
import ResourcesStats from "./_components/ResourcesStats";
import ResourcesIntro from "./_components/ResourcesIntro";
import ResourcesLoop from "./_components/ResourcesLoop";
import ResourcesAssistance from "./_components/ResourcesAssistance";
import { getPopularArticles } from "@/src/utils/blogUtils";
import { RESOURCES_FEATURED, RESOURCES_NEW } from "./resourcesData";

export const metadata = {
  title: "Crypto Marketing Resources",
  description: "Get industry insights, company updates, and expert recommendations on marketing crypto projects. The Enlight team presents dashboard updates, explains the intricacies of crypto marketing, and shares company achievements.",
  openGraph: {
    title: "Crypto Marketing Resources",
    description: "Get industry insights, company updates, and expert recommendations on marketing crypto projects. The Enlight team presents dashboard updates, explains the intricacies of crypto marketing, and shares company achievements.",
    images: "https://enlight.systems/images/meta.png",
  },
};

async function ResourcesPage() {
  const allArticles = await getPopularArticles([]);
  const newSlugs = new Set(RESOURCES_NEW.map((article) => article.slug));
  const newSectionArticles = [
    ...RESOURCES_NEW,
    ...allArticles.filter((article) => !newSlugs.has(article.slug)),
  ];
  const popularArticles = await getPopularArticles([
    ...RESOURCES_NEW.map((article) => article.slug),
    RESOURCES_FEATURED.slug,
  ]);

  return (
    <>
      <ResourcesHero />
      <ResourcesStats />
      <ResourcesIntro />
      <ResourcesLoop
        newSectionArticles={newSectionArticles}
        newArticlesVisibleCount={2}
        popularArticles={popularArticles}
      />
      <ResourcesAssistance />
    </>
  );
}

export default ResourcesPage