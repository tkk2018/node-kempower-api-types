const ConnectorTypeList = [
  "AC",
  "CCS",
  "CHAdeMO",
  "Type2",
  "oppcharge",
] as const;

export type ConnectorType = typeof ConnectorTypeList[number];
