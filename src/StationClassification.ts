import { ParkingType } from "./ParkingType.js";

const AccessList = [
  "PUBLIC",
  "PRIVATE",
] as const;

/**
 * - PUBLIC - Charging stations accessible to any electric vehicle owner, typically located in publicly accessible areas. Open for use by the general public.
 * - PRIVATE - Charging stations located on private property or in restricted-access areas, often limited to specific users or groups. For example, hotel guest charging stations may be behind access-controlled barriers and primarily intended for registered hotel guests.
 */
type Access = typeof AccessList[number];

const ApplicationTypeList = [
  "DEPOT",
  "DINING",
  "HIGHWAY_FUEL_STATION",
  "LODGING",
  "MARINE_DOCK",
  "PARKING_LOT",
  "RECREATION",
  "RESIDENTAL",
  "RETAIL_STORE",
  "SHOPPING_MALL",
  "TRANSPORTATION",
  "WAREHOUSE",
  "WORKPLACE",
] as const;

type ApplicationType = typeof ApplicationTypeList[number];

const FacilityList =[
  "AIRPORT",
  "BIKE_SHARING",
  "BUS_STOP",
  "CAFE",
  "CARPOOL_PARKING",
  "FUEL_STATION",
  "HOTEL",
  "MALL",
  "METRO_STATION",
  "MUSEUM",
  "NATURE",
  "PARKING_LOT",
  "RECREATION_AREA",
  "RESTAURANT",
  "SPORT",
  "SUPERMARKET",
  "TAXI_STAND",
  "TRAIN_STATION",
  "TRAM_STOP",
  "WIFI",
] as const;

type Facility = typeof FacilityList[number];

export interface StationClassification {
  /**
   * Is this a public or private charging station?
   */
  access: Access;

  /**
   * Classification for the charging station or its location reflecting on its intended use.
   */
  applicationTypes?: ApplicationType | null;

  /**
   * Optional list of facilities this charging location directly belongs to.
   */
  facilities?: Facility | null;

  parkingType: ParkingType | null;
};
