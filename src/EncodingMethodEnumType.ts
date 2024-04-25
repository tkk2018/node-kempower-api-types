const EncodingMethodEnumTypeList = [
  "COSEM",
  "Protected",
  "Data",
  "DLMS",
  "Message",
  "EDL",
  "ISA_EDL_40_P",
  "OCMF",
  "Other",
] as const;

export type EncodingMethodEnumType = typeof EncodingMethodEnumTypeList[number];
