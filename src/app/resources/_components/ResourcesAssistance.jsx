import HomeCalculatorCta from "@/src/component/home/HomeCalculatorCta";

function ResourcesAssistance() {
  return (
    <HomeCalculatorCta
      className="resources-assistance"
      showBadge={false}
      lead=""
      title="Need assistance with your marketing?"
      ctaHref="/contact-us"
      ctaLabel="Request expert consultation"
    />
  );
}

export default ResourcesAssistance;
