import React from 'react';
import "@/public/scss/resources.scss";
import ResourcesHero from './_components/ResourcesHero';
import ResourcesLoop from './_components/ResourcesLoop';

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
      <ResourcesLoop />
    </>
  )
}

export default ResourcesPage