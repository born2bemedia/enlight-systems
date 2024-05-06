import React from "react";
import "@/public/scss/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingLast from "./_components/PricingLast";
import PricingSolutions from "./_components/PricingSolutions";

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
