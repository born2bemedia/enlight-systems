import { PLATFORM_FUNNEL_CARDS } from "../platformData";

function PlatformFunnel() {
  return (
    <section className="platform-funnel">
      <div className="_container">
        <div className="platform-funnel__header">
          <h2>See how Enlight streamlines your crypto marketing funnel</h2>
          <p>
            A single platform to manage campaigns, data, users, and performance
            – built to scale with your growth.
          </p>
        </div>

        <ul className="platform-funnel__grid">
          {PLATFORM_FUNNEL_CARDS.map((card) => (
            <li key={card.id} className="platform-funnel__card">
              <span className="platform-funnel__number">{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PlatformFunnel;
