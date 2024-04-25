const ConnectorStatusList = [
  "Available",
  "Charging",
  "Faulted",
  "Occupied",
  "Reserved",
  "Unavailable",
  "Unknown",
] as const;

export type ConnectorStatus = typeof ConnectorStatusList[number];
