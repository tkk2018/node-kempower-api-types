export interface PriceSummary {
  /**
   * Price component: Charging duration, cents, including VAT
   */
  durationPrice: number;

  /**
   * Price component: Charging duration, cents, excluding VAT
   */
  durationPriceExVat: number;

  /**
   * Price component: Energy sales, cents, including VAT
   */
  energyPrice: number;

  /**
   * Price component: Energy sales, cents, excluding VAT
   */
  energyPriceExVat: number;

  /**
   * Price component: Start up fee, cents, including VAT
   */
  flatPrice: number;

  /**
   * Price component: Start up fee, cents, excluding VAT
   */
  flatPriceExVat: number;

  /**
   * Price component: Parking duration (idle after charging), cents, including VAT
   */
  parkingDurationPrice: number;

  /**
   * Price component: Parking duration (idle after charging), cents, including VAT
   */
  parkingDurationPriceExVat: number;

  /**
   * Total charged price, in cents, including VAT
   */
  totalPrice: number;

  /**
   * Total price, in cents, excluding VAT
   */
  totalPriceExVat: number;

  /**
   * Total Value Added Tax, cents
   */
  vatAmount: number;
};
