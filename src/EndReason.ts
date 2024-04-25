const EndReasonList = [
  "ChargingStateChanged",
  "DeAuthorized",
  "EVDisconnected",
  "EmergencyStop",
  "GroundFault",
  "ImmediateReset",
  "Local",
  "LocalOutOfCredit",
  "Other",
  "OvercurrentFault",
  "PowerLoss",
  "Remote",
  "SOCLimitReached",
  "StoppedByEV",
  "TimeLimitReached",
  "Timeout",
  "UnlockCommand",
] as const;

export type EndReason = typeof EndReasonList[number];
