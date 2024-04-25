const TransactionStatusList = [
  "Alarm",
  "AuthorizedNotPluggedIn",
  "Charging",
  "Ended",
  "InsulationTest",
  "PluggedInIdle",
  "Unknown",
] as const;

export type TransactionStatus = typeof TransactionStatusList[number];
