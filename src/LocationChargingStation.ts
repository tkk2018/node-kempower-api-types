import { CeCommonLabel } from "./CeCommonLabel.js";
import { CeLocation } from "./CeLocation.js";
import { Customer } from "./Customer.js";
import { StationClassification } from "./StationClassification.js";
import { StationManufacturingInfo } from "./StationManufacturingInfo.js";
import { TenantId } from "./TenantId.js";

interface StationClassificationLocation extends Pick<CeLocation, "address" | "id" | "lat" | "lng" | "locationId" | "name" | "roamingPoolId"> {
}

const StationOperationalStatusList = [
  "IN_OPERATION",
  "NOT_IN_OPERATION",
  "OUT_OF_ORDER",
] as const;

type StationOperationalStatus = typeof StationOperationalStatusList[number];

export interface LocationChargingStation extends TenantId {
  classification?: StationClassification;

  commissioningRequired?: boolean | null;

  customer: Customer;

  /**
   * ID a customer has given to this station
   */
  customerSuppliedId?: string;

  firmwareVersion?: string | null;

  groupPath?: string | null;

  labels?: CeCommonLabel | null;

  /**
   * licenseId to enforce permissions on this charger
   */
  licenseId?: string | null;

  /**
   * tenantId which provides / pays for the license
   */
  licenseTenantId?: string | null;


  location?: StationClassificationLocation | null;

  /**
   * The {@link id} of this location.
   */
  locationUid?: string | null;

  manufacturingInfo?: StationManufacturingInfo;

  /**
   * Charger maximum output power at any point in time in kilowatts. How much power it can output simultaneously to all its connectors.
   */
  maxPowerKw?: number;

  model?: string | null;

  /**
   * @requires
   */
  name: string;

  notes?: string | null;

  operationalStatus?: StationOperationalStatus;

  operator?: string | null;

  /**
   * Capabilities that the station supports as a comma separated list. For example when station supports serial connectable power modules, contents would be: stationCapabilities = "SerialConnection,Xxx, ... ,Yyy"
   */
  stationCapabilities?: string | null;

  /**
   * @requires
   */
  stationId: string;

  vendorName?: string | null;
};
