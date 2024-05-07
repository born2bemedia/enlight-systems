import React from "react";
import "@/public/scss/contact.scss";
import ContactBlock from "./_components/ContactBlock";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact the Enlight team if you have questions about our dashboard, its compatibility, integrations, and features. Our experts will assist you in choosing and setting up your perfect crypto marketing dashboard.",
  openGraph: {
    title: "Contact Us",
    description:
      "Contact the Enlight team if you have questions about our dashboard, its compatibility, integrations, and features. Our experts will assist you in choosing and setting up your perfect crypto marketing dashboard.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function QuickContact() {
  return (
    <>
      <ContactBlock />
    </>
  );
}

export default QuickContact;
