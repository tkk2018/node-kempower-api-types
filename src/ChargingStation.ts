import { Connector } from "./Connector.js";
import { NamedLocation } from "./NamedLocation.js";
import { SetNonNullable } from "type-fest";

interface Label {
  /**
   * @requires
   */
  value: string;
};

export const OnlineStatusList = [
  "Offline",
  "Online",
] as const;

type OnlineStatus = typeof OnlineStatusList[number];

export const ChargingStationStatusList = [
  "Faulted",
  "Operative",
  "Unavailable",
] as const;

type ChargingStationStatus = typeof ChargingStationStatusList[number];

interface KnownLocation extends SetNonNullable<NamedLocation> {};

export interface ChargingStationIdentifier {
  /**
   * @requires
   */
  stationId: string;
};

export interface ChargingStation extends ChargingStationIdentifier {
  /**
   * AC-DC conversion ratio
   */
  acDcPowerRatio?: number;

  /**
   * @requires
   */
  connectors: Connector[];

  /**
   * Current intake at present (amperes) of the station
   */
  currentPowerA?: number;

  /**
   * Current output power (kW) of the station
   */
  currentPowerKw?: number;

  /**
   * Array of objects or null
   */
  labels?: Label[] | null;

  location: KnownLocation;

  locationUid?: string;

  /**
   * Maximum input current (amperes) of the station that it could theoretically take with current configuration. Equals to PMC input supply current. Dynamic limits (charging profiles) do not affect this.
   */
  maxPowerA: number;

  /**
   * MAX output power (kW) of the station undefined if not known
   */
  maxPowerKw: number;

  /**
   * @requires
   */
  name: string;

  /**
   * @requires
   */
  onlineStatus: OnlineStatus;

  /**
   * Path in powerGroup tree, 0th value is the id of root. This station does not belong to a power group if this is null/empty
   */
  powerGroupParentPath: string[] | null;

  /**
   * Capabilities that the station supports as a comma separated list. For example when station supports serial connectable power modules, contents would be: stationCapabilities = "SerialConnection,Xxx, ... ,Yyy"
   */
  stationCapabilities: string | null;

  /**
   * @requires
   */
  status: ChargingStationStatus;
};
