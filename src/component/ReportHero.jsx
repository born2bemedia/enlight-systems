/**
 * Branded title banner for the report pages, reusing the our-platform hero
 * styling (`platform-hero`) so it matches the rest of the site.
 *
 * @param {{ title?: string, domain?: string }} props
 */
function ReportHero({ title = "Website Check Report", domain }) {
  return (
    <section className="platform-hero report-hero">
      <div className="_container">
        <div className="platform-hero__panel">
          <h1>{title}</h1>
          <p>{domain ? `${domain}` : "Your website analysis"}</p>
        </div>
      </div>
    </section>
  );
}

export default ReportHero;
