import "@/public/scss/purpose.scss";
import PurposeHero from "./_components/PurposeHero";
import PurposeLast from "./_components/PurposeLast";
import PurposeSecond from "./_components/PurposeSecond";
import FormPopup from "@/src/component/FormPopup";

export const metadata = {
  title: "Dashboard Application",
  description: "Explore the best purposes the Enlight platform suits. Manage campaigns, customers, and budgets, analyse performance, and optimise campaigns in a single interface.",
  openGraph: {
    title: "Dashboard Application",
    description: "Explore the best purposes the Enlight platform suits. Manage campaigns, customers, and budgets, analyse performance, and optimise campaigns in a single interface.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function PurposePage() {
  return (
    <>
      <PurposeHero />
      <PurposeSecond/>
      <PurposeLast />
      
    </>
  );
}

export default PurposePage;
