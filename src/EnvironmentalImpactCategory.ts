const EnvironmentalImpactCategoryList = [
  "CARBON_DIOXIDE",
  "NUCLEAR_WASTE",
] as const;

/**
 * - NUCLEAR_WASTE - Produced nuclear waste in grams per kWh
 * - CARBON_DIOXIDE - Exhausted carbon dioxide in grams per kWh
 */
export type EnvironmentalImpactCategory = typeof EnvironmentalImpactCategoryList[number];
