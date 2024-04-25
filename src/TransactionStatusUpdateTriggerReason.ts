const TransactionStatusUpdateTriggerReasonList = [
  "Authorized",
  "CablePluggedIn",
  "ChargingRateChanged",
  "ChargingStateChanged",
  "Deauthorized",
  "EVCommunicationLost",
  "EVConnectTimeout",
  "EVDeparted",
  "EVDetected",
  "EnergyLimitReached",
  "MeterValueClock",
  "MeterValuePeriodic",
  "RemoteStart",
  "RemoteStop",
  "StopAuthorized",
  "TimeLimitReached",
  "Trigger",
  "UnlockCommand",
] as const;

export type TransactionStatusUpdateTriggerReason = typeof TransactionStatusUpdateTriggerReasonList[number];
