/**
 * The type definition of {@link https://docs.kempower.io/en/chargeye/api-reference/transactions/api/#operation/getTransaction!c=200&path=transaction/paymentDetails/activeTariff/tariff_alt_text&t=response | DisplayText}.
 */
export interface TariffDisplayText {
  /**
   * Language Code ISO 639-1
   * @requires
   */
  language: string;

  /**
   * Text to be displayed to a end user. No markup, html etc. allowed
   * @requires
   */
  text: string;
};
