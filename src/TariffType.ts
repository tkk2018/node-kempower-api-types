const TariffTypeList = [
  "AD_HOC_PAYMENT",
  "PROFILE_CHEAP",
  "PROFILE_FAST",
  "PROFILE_GREEN",
  "REGULAR",
] as const;

export type TariffType = typeof TariffTypeList[number];
