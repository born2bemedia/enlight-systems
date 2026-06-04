export const STEP_NUMBERS = ["01", "02", "03", "04", "05", "06", "07"];

export const JOURNEY_STEPS = [
  {
    id: "01",
    title: "User registers",
    text: "The moment they sign up, the journey begins.",
  },
  {
    id: "02",
    title: "Show a welcome popup",
    text: "While they're still active, we greet them with a personalized first-time deposit offer.",
  },
  {
    id: "03",
    title: "Wait 2 hours",
    text: "Give the user a little space to explore and decide. If they convert, they exit the flow automatically.",
  },
  {
    id: "04",
    title: "Check if they've deposited",
    text: "If yes, they exit. If not, we follow up.",
  },
  {
    id: "05",
    title: "Send a follow-up email (with A/B test)",
    text: "We test two different email variants - one focused on bonus value, another on simplicity - to see what drives better engagement.",
  },
  {
    id: "06",
    title: "Wait 1 more day",
    text: "Still no deposit? Time for a nudge that cuts through.",
  },
  {
    id: "07",
    title: "Send an SMS reminder",
    text: "A sharp, timely message puts the offer back in play. And boosts urgency.",
  },
];

export const STATUS_FROM = [
  { label: "User registers", positive: true },
  { label: "Navigates the service", positive: true },
  { label: "Attempts to use features but fails", positive: false },
  { label: "Searches for support or guides but fails", positive: false },
  { label: "Does not receive onboarding emails", positive: false },
  { label: "Contacts support with limited availability", positive: false },
  { label: "Encounters aggressive pop-ups with deposit prompts", positive: false },
  { label: "Churns", positive: false },
];

export const STATUS_TO = [
  { label: "User registers", positive: true },
  { label: "Navigates the service", positive: true },
  { label: "Receives onboarding emails with clear guidance", positive: true },
  { label: "Accesses support from any page", positive: true },
  { label: "Receives regular product updates via email", positive: true },
  { label: "Gets incentives that encourage return visits", positive: true },
  { label: "Is notified after a period of inactivity", positive: true },
  { label: "Continues active usage of the service", positive: true },
];
