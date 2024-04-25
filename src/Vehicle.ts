import { V2icpInfo } from "./V2icpInfo.js";
import { V2icpParameters } from "./V2icpParameters.js";
import { VehicleBase } from "./VehicleBase.js";

export interface Vehicle extends VehicleBase {
  locationUid: string | string[] | null;

  /**
   * Maximum power this EV is capable of charging at, indicative, >=1
   */
  maxChargePowerkW: number;

  V2icp: V2icpInfo;

  v2icpParameters: V2icpParameters;
};
