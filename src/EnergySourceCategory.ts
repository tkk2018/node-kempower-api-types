const EnergySourceCategoryList = [
  "COAL",
  "GAS",
  "GENERAL_FOSSIL",
  "GENERAL_GREEN",
  "NUCLEAR",
  "SOLAR",
  "WATER",
  "WIND",
] as const;

/**
 * - NUCLEAR - Nuclear power sources.
 * - GENERAL_FOSSIL - All kinds of fossil power sources.
 * - COAL - Fossil power from coal.
 * - GAS - Fossil power from gas.
 * - GENERAL_GREEN - All kinds of regenerative power sources.
 * - SOLAR - Regenerative power from PV.
 * - WIND - Regenerative power from wind turbines.
 * - WATER - Regenerative power from water turbines.
 */
export type EnergySourceCategory = typeof EnergySourceCategoryList[number];
