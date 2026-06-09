export const COST_METHODS = {
  LEAD: "cpl",
  CLICK: "cpc",
};

export function calculateMarketingBudget({
  costMethod,
  targetCustomers,
  leadConversionRate,
  averageDealSize,
  averageCPL,
  clickConversionRate,
  averageCPC,
}) {
  const customers = Number(targetCustomers);
  const leadRate = Number(leadConversionRate);
  const dealSize = Number(averageDealSize);

  if (
    !customers ||
    !leadRate ||
    !dealSize ||
    leadRate <= 0 ||
    leadRate > 100
  ) {
    return null;
  }

  const requiredLeads = Math.ceil(customers / (leadRate / 100));
  let monthlyBudget = 0;
  let requiredClicks = null;

  if (costMethod === COST_METHODS.LEAD) {
    const cpl = Number(averageCPL);
    if (!cpl) return null;
    monthlyBudget = requiredLeads * cpl;
  } else {
    const clickRate = Number(clickConversionRate);
    const cpc = Number(averageCPC);
    if (!clickRate || !cpc || clickRate <= 0 || clickRate > 100) {
      return null;
    }
    requiredClicks = Math.ceil(requiredLeads / (clickRate / 100));
    monthlyBudget = requiredClicks * cpc;
  }

  const expectedRevenue = customers * dealSize;
  const roi =
    monthlyBudget > 0
      ? ((expectedRevenue - monthlyBudget) / monthlyBudget) * 100
      : 0;

  return {
    requiredLeads,
    requiredClicks,
    monthlyBudget,
    expectedRevenue,
    roi,
  };
}
