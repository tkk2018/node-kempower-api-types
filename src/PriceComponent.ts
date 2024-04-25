import { TariffDimensionType } from "./TariffDimensionType.js";

export interface PriceComponent {
  /**
   * Price per unit (excl. VAT) for this tariff dimension
   */
  price: number;

  /**
   * Minimum amount to be billed. This unit will be billed in this step_size blocks. Amounts that are less then this step_size are rounded up to the given step_size. For example: if type is TIME and step_size has a value of 300, then time will be billed in blocks of 5 minutes. If 6 minutes were used, 10 minutes (2 blocks of step_size) will be billed. See OCPI 2.2-d2 section 11.4.2 for more information
   */
  step_size: number;

  type: TariffDimensionType;

  /**
   * Applicable VAT percentage for this tariff dimension. If omitted, no VAT is applicable. Not providing a VAT is different from 0% VAT, which would be a value of 0.0 here
   */
  vat: number;
};
