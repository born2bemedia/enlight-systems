import { PLATFORM_PROCESSES } from "../platformData";

function PlatformProcesses() {
  return (
    <section className="platform-processes">
      <div className="_container">
        <h2>Enlight streamlines core marketing processes</h2>

        <div className="platform-processes__grid">
          {PLATFORM_PROCESSES.map((block) => (
            <article key={block.id} className="platform-processes__block">
              <div className="platform-processes__head">
                <h3>{block.title}</h3>
                <p>{block.description}</p>
              </div>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformProcesses;
