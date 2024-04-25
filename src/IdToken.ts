const IdTokenTypeList = [
  "Central",
  "ISO14443",
  "ISO15693",
  "KeyCode",
  "Local",
  "NoAuthorization",
  "eMAID",
] as const;

export type IdTokenEnumType = typeof IdTokenTypeList[number];

export interface IdToken {
  idToken: string;
  type: IdTokenEnumType;
};
