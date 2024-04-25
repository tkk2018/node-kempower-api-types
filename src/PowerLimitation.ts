const PowerLimitationList = [
  "Charger",
  "Grid",
  "Queue",
  "Shared",
  "Vehicle",
] as const;

/**
 * One of:
 * - Charger limits - Maximum charging power - Vehicle is charged with the full power of the charger.
 * - Vehicle limits - Charging power limited by the vehicle - Your vehicle is accepting charging power below the charger capabilities.
 * - Grid limits - Charging power limited by the electrical grid
 * - Shared - Charging power is shared with another vehicle(s)
 * - Queue - Charging is queued
 */
export type PowerLimitation = typeof PowerLimitationList[number];
