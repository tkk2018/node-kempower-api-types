import { EncodingMethodEnumType } from "./EncodingMethodEnumType.js";
import { SignatureMethodEnumType } from "./SignatureMethodEnumType.js";

export interface SignedMeterValueType {
  encodingMethod: EncodingMethodEnumType;

  /**
   * Base64 encoded, contains the signed data which might contain more than just the meter value.
   */
  meterValueSignature: string;

  /**
   * The Eichrecht required pagination value from the meter. A per-meter counter value that is incremented by one every time a signed value is retrieved from the meter.
   */
  pagination: number;

  /**
   * Base64 encoded, sending depends on configuration variable PublicKeyWithSignedMeterValue
   */
  publicKey: string;

  signatureMethod: SignatureMethodEnumType;

  [x: string]: unknown;
};
