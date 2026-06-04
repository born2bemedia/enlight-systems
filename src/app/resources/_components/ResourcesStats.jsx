import { RESOURCES_STATS } from "../resourcesData";

function ResourcesStats() {
  return (
    <section className="resources-stats home-stats">
      <div className="_container">
        <ul className="home-stats__grid">
          {RESOURCES_STATS.map((item) => (
            <li key={item.value} className="home-stats__card">
              <h3>{item.value}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ResourcesStats;
