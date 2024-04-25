const ConnectionTypeList = [
  "ocpi",
  "ocpp",
] as const;

export type ConnectionType = typeof ConnectionTypeList[number];
