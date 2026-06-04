import HomeJourneySplit from "./HomeJourneySplit";
import { STATUS_FROM } from "./journeyFlowData";

function HomeJourneyFlow() {
  return (
    <HomeJourneySplit
      heading="User journeys can quickly turn from this:"
      statusItems={STATUS_FROM}
    />
  );
}

export default HomeJourneyFlow;
