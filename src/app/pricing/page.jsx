import React from "react";
import "@/public/scss/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingLast from "./_components/PricingLast";
import PricingSolutions from "./_components/PricingSolutions";

export const metadata = {
  title: "Pricing",
  description:
    "Explore available Enlight solutions. We offer flexible pricing plans for our dashboard. You can also request a custom dashboard and set only the necessary modules.",
  openGraph: {
    title: "Pricing",
    description:
      "Explore available Enlight solutions. We offer flexible pricing plans for our dashboard. You can also request a custom dashboard and set only the necessary modules.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingSolutions />
      <PricingLast />
    </>
  );
}

export default PricingPage;
