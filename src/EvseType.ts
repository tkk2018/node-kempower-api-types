const EvseTypeList = [
  "AC",
  "CCS",
  "CHAdeMO",
  "Type2",
  "oppcharge",
] as const;

export type EvseType = typeof EvseTypeList[number];
