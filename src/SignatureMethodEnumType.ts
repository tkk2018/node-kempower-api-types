const SignatureMethodEnumTypeList = [
  "ECDSA-secp256k1-SHA256",
  "ECDSA-secp256r1-SHA256",
  "ECDSA192SHA256",
  "ECDSAP256SHA256",
  "ECDSAP384SHA384",
] as const;

/**
 * - ECDSAP256SHA256" | "ECDSAP384SHA384" | "ECDSA192SHA256" - From OCPP spec, no known use cases
 * - ECDSA-secp256r1-SHA256 - Isabellenhütte IEM-DCC-500 (SML)
 * - ECDSA-secp256k1-SHA256 - DZG GSH-01 (OCMF)
 */
export type SignatureMethodEnumType = typeof SignatureMethodEnumTypeList[number];
