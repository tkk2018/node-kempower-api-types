export interface V2icpInfo {
  /**
   * ID of vehicle
   * @requires
   */
  evId: string;

  /**
   * EV mac address
   */
  evMacAddress: string;

  /**
   * Last known location of EV
   */
  locationUid: string;

  /**
   * Number of kilometers this vehicle has traveled in total
   */
  odometer: string;

  /**
   * The passwordId used in this v2icp session
   */
  passwordId: string;

  /**
   * ChargEye-sent response to the bus
   */
  response: unknown;

  /**
   * Timestamp of the V2ICP message
   * @requires
   */
  timestamp: string;

  /**
   * Original raw message from vehicle
   * @requires
   */
  v2icp: unknown;

  /**
   * VIN number
   * @requires
   */
  vin: string;
};
