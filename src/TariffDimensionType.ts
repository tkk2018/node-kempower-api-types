const TariffDimensionTypeList = [
  "ENERGY",
  "FLAT",
  "PARKING_TIME",
  "TIME",
] as const;

/**
 * - ENERGY - Defined in kWh, step_size multiplier: 1Wh
 * - FLAT - Flat fee without unit for step_size
 * - PARKING_TIME - Time not charging: defined in hours, step_size multiplier: 1 second
 * - TIME - Time charging: defined in hours, step_size multiplier: 1 second. Can also be used in combination with a RESERVATION restriction to describe the price of the reservation time
 */
export type TariffDimensionType = typeof TariffDimensionTypeList[number];
