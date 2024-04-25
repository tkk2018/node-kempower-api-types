import { V2icpParameters } from "./V2icpParameters.js";
import { VehicleBase } from "./VehicleBase.js";

interface TransactionVehicleV2IcpParameters extends V2icpParameters {
  /**
   * driveoff is determined by this timestamp - temporary until schedules are being utilized properly
   */
  scheduledDepartureTs: string;

  /**
   * Target state of charge battery percentage
   */
  targetSoC: number;
};

export interface TransactionVehicle extends VehicleBase  {
  locationUid: string;

  /**
   * Maximum power this EV is capable of charging at, indicative
   */
  maxChargePowerkW: string;

  /**
   * V2ICP testing
   */
  v2icpParameters: TransactionVehicleV2IcpParameters;
};
