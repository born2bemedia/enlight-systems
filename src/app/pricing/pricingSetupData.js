export const PRICING_SETUP_INTRO =
  "Our pricing tiers are tailored to the specific needs of crypto projects. Based on our analysis of over 10,000 projects and marketing campaigns, we've developed packages to suit various project requirements.";

export const PRICING_SETUP_QUESTIONS = [
  {
    id: "campaigns",
    label: "How many campaigns do you run monthly?",
    options: [
      { id: "1-5", label: "1-5", score: 1 },
      { id: "5-20", label: "5-20", score: 2 },
      { id: "20-50", label: "20-50", score: 3 },
      { id: "50+", label: "50+", score: 4 },
    ],
  },
  {
    id: "team",
    label: "How large is your marketing team?",
    options: [
      { id: "1", label: "1 person", score: 1 },
      { id: "2-5", label: "2-5 people", score: 2 },
      { id: "5-15", label: "5-15 people", score: 3 },
      { id: "15+", label: "15+", score: 4 },
    ],
  },
  {
    id: "budget",
    label: "What is your monthly marketing budget?",
    options: [
      { id: "1-5k", label: "€1-5k", score: 1 },
      { id: "5-20k", label: "€5-20k", score: 2 },
      { id: "20-50k", label: "€20-50k", score: 3 },
      { id: "50k+", label: "€50k+", score: 4 },
    ],
  },
  {
    id: "needs",
    label: "What do you need most?",
    multiple: true,
    options: [
      { id: "reporting", label: "Analytics & reporting", score: 1 },
      { id: "campaigns", label: "Campaign management", score: 2 },
      { id: "crm", label: "CRM & audience insights", score: 3 },
      { id: "full", label: "Full platform coverage", score: 4 },
    ],
  },
];

export const PRICING_RECOMMENDATIONS = {
  Basic: {
    title: "Basic",
    description:
      "Based on your current marketing scale, Basic will cover your core campaign and reporting needs.",
  },
  Standard: {
    title: "Standard",
    description:
      "Standard fits your team size and campaign volume with CRM, automation, and deeper analytics included.",
  },
  Advanced: {
    title: "Advanced",
    description:
      "Advanced matches your scale with full module access, integrations, and compliance tooling.",
  },
  Custom: {
    title: "Custom",
    description:
      "Your requirements span multiple areas — we recommend a tailored dashboard built around the modules you need most.",
  },
};

export function getRecommendedPlan(answers) {
  const questions = PRICING_SETUP_QUESTIONS;
  let score = 0;

  questions.forEach((question) => {
    if (question.multiple) {
      const selectedIds = answers[question.id] || [];
      selectedIds.forEach((selectedId) => {
        const option = question.options.find((o) => o.id === selectedId);
        if (option) score += option.score;
      });
      return;
    }

    const selectedId = answers[question.id];
    const option = question.options.find((o) => o.id === selectedId);
    if (option) score += option.score;
  });

  if (score <= 5) return "Basic";
  if (score <= 9) return "Standard";
  if (score <= 13) return "Advanced";
  return "Custom";
}
