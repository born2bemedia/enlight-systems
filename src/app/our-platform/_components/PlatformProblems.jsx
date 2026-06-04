import { PLATFORM_PROBLEMS } from "../platformData";

function PlatformProblems() {
  return (
    <section className="platform-problems">
      <div className="_container">
        <h2>Key crypto marketing problems Enlight helps solve</h2>

        <ul className="platform-problems__grid">
          {PLATFORM_PROBLEMS.map((problem) => (
            <li key={problem.id} className="platform-problems__card">
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PlatformProblems;
