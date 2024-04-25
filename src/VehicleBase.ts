export interface VehicleBase {
  /**
   * EV consumption Wh/km - used to calculate the added range
   */
  consumption: number;

  /**
   * If true, this EV's charging is controlled by the departure schedule set in ChargEye.
   */
  enableChargeScheduling: boolean;

  evMacAddress: string;

  /**
   * model&make of the vehicle
   */
  evModel: string;

  /**
   * Estimate of energy required to charge from 0 to 100% (estimate of battery size), >=1
   */
  fullChargeEnergykWh: number;

  /**
   * @requires
   */
  id: string;

  /**
   * license/registry plate
   */
  licensePlate: string;

  /**
   * user given name for the vehicle
   */
  name: string;

  /**
   * additional notes or description
   */
  notes: string;

  /**
   * Set to true if this EV is capable of pausing and resuming, e.g. some buses
   */
  supportsPauseResume: boolean;
};
