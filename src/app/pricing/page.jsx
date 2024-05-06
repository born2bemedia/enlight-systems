import React from "react";
import "@/public/scss/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingLast from "./_components/PricingLast";

function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingLast />
    </>
  );
}

export default PricingPage;
