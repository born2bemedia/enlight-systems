const STATS = [
  {
    value: "€12M+",
    text: "lost yearly by crypto projects through inefficient marketing operations",
  },
  {
    value: "3 in 5",
    text: "crypto campaigns fail due to weak funnels and unclear messaging",
  },
  {
    value: "73%",
    text: "of crypto users leave before completing onboarding",
  },
  {
    value: "68%",
    text: "of marketing budgets are wasted on low-converting traffic",
  },
  {
    value: "90%",
    text: "of teams lack visibility into full user journey performance",
  },
  {
    value: "4X",
    text: "increase in users refusing to register due to project reputation concerns.",
  },
];

function HomeStats() {
  return (
    <section className="home-stats">
      <div className="_container">
        <ul className="home-stats__grid">
          {STATS.map((item) => (
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

export default HomeStats;
