import Image from "next/image";

function HomeJourneys() {
  return (
    <section className="home-journeys">
      <div className="_container">
        <div className="home-journeys__panel">
          <div className="home-journeys__content">
            <h2>User journeys require visibility</h2>
            <p>
              If you do not track user behaviour across the funnel, you lose
              users before conversion.
            </p>
          </div>
          <div className="home-journeys__visual" aria-hidden="true">
            <Image
              src="/images/home/third-block-image.webp"
              width={400}
              height={345}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeJourneys;
