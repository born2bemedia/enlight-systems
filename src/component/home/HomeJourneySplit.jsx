import Image from "next/image";
import { STEP_NUMBERS, JOURNEY_STEPS } from "./journeyFlowData";

const STATUS_ICON = {
  positive: "/images/home/journey-flow/status-check.svg",
  negative: "/images/home/journey-flow/status-minus.svg",
};

function splitStatusColumns(items) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

function HomeJourneySplit({ heading, statusItems }) {
  const statusColumns = splitStatusColumns(statusItems);

  return (
    <section className="home-journey-flow">
      <div className="_container">
        <div className="home-journey-flow__layout">
          <div className="home-journey-flow__body">
            <aside className="home-journey-flow__aside">
              <h2>{heading}</h2>
              <div className="home-journey-flow__visual">
                <Image
                  src="/images/home/journey-flow/visual.png"
                  width={496}
                  height={574}
                  alt=""
                />
              </div>
            </aside>

            <ul className="home-journey-flow__steps">
              {JOURNEY_STEPS.map((step) => (
                <li key={step.id} className="home-journey-flow__step">
                  <div className="home-journey-flow__step-inner">
                    <div className="home-journey-flow__step-numbers">
                      {STEP_NUMBERS.map((num) => (
                        <span
                          key={num}
                          className={num === step.id ? "is-active" : ""}
                        >
                          {num}.
                        </span>
                      ))}
                    </div>
                    <div className="home-journey-flow__step-body">
                      <div
                        className={`home-journey-flow__step-icon ${
                          step.id === "01" ? "is-large" : ""
                        }`}
                      >
                        <img
                          src={`/images/home/journey-flow/step-${step.id}.svg`}
                          width={step.id === "01" ? 64 : 56}
                          height={step.id === "01" ? 64 : 56}
                          alt=""
                        />
                      </div>
                      <div className="home-journey-flow__step-copy">
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-journey-flow__status">
            {statusColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="home-journey-flow__status-col">
                {column.map((item) => (
                  <li key={item.label}>
                    <div className="home-journey-flow__status-label">
                      {item.label}
                    </div>
                    <div className="home-journey-flow__status-icon" aria-hidden="true">
                      <img
                        src={
                          item.positive
                            ? STATUS_ICON.positive
                            : STATUS_ICON.negative
                        }
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeJourneySplit;
