import "@/public/scss/purpose.scss";
import PurposeHero from "./_components/PurposeHero";
import PurposeLast from "./_components/PurposeLast";
import PurposeSecond from "./_components/PurposeSecond";
import FormPopup from "@/src/component/FormPopup";

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
