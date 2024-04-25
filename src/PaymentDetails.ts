import { EmvStateDetail } from "./EmvStateDetail.js";
import { PriceSummary } from "./PriceSummary.js";
import { Tariff } from "./Tariff.js";

const AuthorizationMethodList = [
  "BLE",
  "BarCode",
  "ContactlessICC",
  "ContactlessMagStripe",
  "ECommerce",
  "EmergencyDataEntry",
  "ICC",
  "MagStripe",
  "MagStripeFallback",
  "MagStripeFallbackAgain",
  "MagStripeFallbackICCFail",
  "MagStripeIncomplete",
  "Manual",
  "NoCVM",
  "OCR",
  "OnDevice",
  "PIN",
  "PINSignature",
  "QRCodeOnMobile",
  "QRCodeOnTerminal",
  "ReferenceBased",
  "Signature",
  "TokenBasedECommerce",
  "Undefined",
  "Unspecified",
] as const;

type AuthorizationMethod = typeof AuthorizationMethodList[number];

export interface PaymentDetails {
  activeTariff: Tariff;

  /**
   * Additional Merchant Data
   */
  applicationCurrencyCode: string;

  /**
   * Aid
   */
  applicationId: string;

  /**
   * Detail how the authorization was made
   */
  authMethod: AuthorizationMethod;

  /**
   * For example VISA, Maestro Commercial Prepaid Undefined
   */
  cardScheme: string;

  cardType: string;

  commit: EmvStateDetail;

  /**
   * masked card number
   */
  maskedCardNumber: string;

  /**
   * Merchant ID
   */
  merchantId: string;

  priceSummary: PriceSummary;

  reservation: EmvStateDetail;

  /**
   * Payment Terminal ID / Serial number
   */
  terminalId: string;

  void: EmvStateDetail;
};
