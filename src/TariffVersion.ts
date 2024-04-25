const TariffVersionList = [
  "INTERNAL",
  "OCPI",
] as const;

/**
 * - INTERNAL uses parking pricing per minute.
 * - OCPI uses per hour.
 */
export type TariffVersion = typeof TariffVersionList[number];
