export const TransactionAuthorizationMethodList = [
  "EMV",
  "EVMAC",
  "IMPLICIT",
  "REMOTE_AUTH",
  "RFID_TOKEN",
] as const;

export type TransactionAuthorizationMethod = typeof TransactionAuthorizationMethodList[number];
