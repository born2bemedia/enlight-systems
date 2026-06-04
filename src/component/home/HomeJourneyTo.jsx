import HomeJourneySplit from "./HomeJourneySplit";
import { STATUS_TO } from "./journeyFlowData";

function HomeJourneyTo() {
  return <HomeJourneySplit heading="To this:" statusItems={STATUS_TO} />;
}

export default HomeJourneyTo;
