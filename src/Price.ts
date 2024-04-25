export interface Price {
  /**
   * Price/Cost excluding VAT
   */
  excl_vat: number;

  /**
   * Price/Cost including VAT
   */
  incl_vat?: number;
};
