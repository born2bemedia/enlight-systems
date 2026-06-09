function HomeJourneySplit({ heading, desktopSrc, mobileSrc, isFollow = false }) {
  return (
    <section
      className={`home-journey-flow${
        isFollow ? " home-journey-flow--follow" : ""
      }`}
    >
      <div className="_container">
        <h2 className="home-journey-flow__heading">{heading}</h2>
        <figure className="home-journey-flow__figure">
          <img
            src={desktopSrc}
            width={1392}
            height={537}
            alt=""
            className="home-journey-flow__img home-journey-flow__img--desktop"
            loading={isFollow ? "lazy" : "eager"}
            decoding="async"
          />
          <img
            src={mobileSrc}
            width={390}
            height={731}
            alt=""
            className="home-journey-flow__img home-journey-flow__img--mobile"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}

export default HomeJourneySplit;
