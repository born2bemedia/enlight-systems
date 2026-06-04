import React from "react";
import "@/public/scss/quick-contact.scss";
import QuickContactBlock from "./_components/QuickContactBlock";

export const metadata = {
  title: "Quick Contact",
  description:
    "Not sure what setup you need? Tell us about your marketing challenges and get help identifying gaps and the right Enlight solution.",
  openGraph: {
    title: "Quick Contact",
    description:
      "Not sure what setup you need? Tell us about your marketing challenges and get help identifying gaps and the right Enlight solution.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function QuickContact() {
  return (
    <>
      <QuickContactBlock />
    </>
  );
}

export default QuickContact;
