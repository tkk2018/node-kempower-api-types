const EvmCardTypeList = [
  "",
  "Commercial",
  "Credit",
  "Debit",
  "Prepaid",
  "Undefined",
] as const;

export type EvmCardType = typeof EvmCardTypeList[number];
