import React from "react";
import "@/public/scss/quick-contact.scss";
import QuickContactBlock from "./_components/QuickContactBlock";

export const metadata = {
  title: "Quick Contact",
  description:
    "Get immediate dedicated assistance from the Enlight team. Choose your question or problem, describe the issue and Send a request to a dedicated expert. We will answer asap!",
  openGraph: {
    title: "Quick Contact",
    description:
      "Get immediate dedicated assistance from the Enlight team. Choose your question or problem, describe the issue and Send a request to a dedicated expert. We will answer asap!",
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
