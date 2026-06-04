import { HOME_FEATURES } from "./homeFeaturesData";

function HomeFeatures() {
  return (
    <section className="home-features">
      <div className="_container">
        <div className="home-features__header">
          <h2>Enlight: Marketing that is fully visible</h2>
          <p className="home-features__lead">
            One dashboard for campaigns, user journeys, and lifetime value: from
            acquisition to long-term retention and financial analytics.
          </p>
        </div>

        <ul className="home-features__grid">
          {HOME_FEATURES.map((feature) => (
            <li key={feature.id} className="home-features__card">
              <div className="home-features__icon">
                <img src={feature.icon} width={40} height={40} alt="" />
              </div>
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeFeatures;
