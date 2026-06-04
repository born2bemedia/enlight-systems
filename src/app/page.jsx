import "@/public/scss/home.scss";
import "@/public/scss/home-stats.scss";
import "@/public/scss/home-domain-form.scss";
import "@/public/scss/home-reputation.scss";
import "@/public/scss/home-content.scss";
import "@/public/scss/home-journeys.scss";
import "@/public/scss/home-journey-flow.scss";
import "@/public/scss/home-calculator.scss";
import "@/public/scss/home-calculator-cta.scss";
import "@/public/scss/home-features.scss";
import "@/public/scss/home-insights.scss";
import HomeFirst from "../component/home/HomeFirst";
import HomeStats from "../component/home/HomeStats";
import HomeReputation from "../component/home/HomeReputation";
import HomeContent from "../component/home/HomeContent";
import HomeJourneys from "../component/home/HomeJourneys";
import HomeJourneyFlow from "../component/home/HomeJourneyFlow";
import HomeJourneyTo from "../component/home/HomeJourneyTo";
import HomeCalculator from "../component/home/HomeCalculator";
import HomeCalculatorCta from "../component/home/HomeCalculatorCta";
import HomeFeatures from "../component/home/HomeFeatures";
import HomeInsights from "../component/home/HomeInsights";

export default function Home() {
  return (
    <>
      <HomeFirst />
      <HomeStats />
      <HomeReputation />
      <HomeContent />
      <HomeJourneys />
      <HomeJourneyFlow />
      <HomeJourneyTo />
      <HomeCalculator />
      <HomeCalculatorCta />
      <HomeFeatures />
      <HomeInsights />
    </>
  );
}
