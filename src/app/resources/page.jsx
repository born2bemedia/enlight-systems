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

export const metadata = {
  title: "Crypto Marketing Resources",
  description: "Get industry insights, company updates, and expert recommendations on marketing crypto projects. The Enlight team presents dashboard updates, explains the intricacies of crypto marketing, and shares company achievements.",
  openGraph: {
    title: "Crypto Marketing Resources",
    description: "Get industry insights, company updates, and expert recommendations on marketing crypto projects. The Enlight team presents dashboard updates, explains the intricacies of crypto marketing, and shares company achievements.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesStats />
      <ResourcesIntro />
      <ResourcesLoop />
      <ResourcesAssistance />
    </>
  );
}

export default ResourcesPage