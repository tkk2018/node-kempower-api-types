const StartReasonList = [
  "Authorized",
  "CablePluggedIn",
  "ChargingStateChanged",
  "EVPresenceDetected",
  "Local",
  "RemoteStart",
  "UserStartButtonPressed",
] as const;

export type StartReason = typeof StartReasonList[number];
