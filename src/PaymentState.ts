const PaymentStateList = [
  "CANCELLED",
  "COMMITTED",
  "VOIDED",
] as const;

export type PaymentState = typeof PaymentStateList[number];
