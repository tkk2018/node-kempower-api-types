export interface TransactionsSummary {
  /**
   * @requires
   */
  chargedEnergyKwh: number;

  /**
   * @requires
   */
  chargingTimeMs: number;

  /**
   * @requires
   */
  count: number;

  /**
   * @requires
   */
  occupiedTimeMs: number;
};
