const ParkingTypeList = [
  "ALONG_MOTORWAY",
  "PARKING_GARAGE",
  "PARKING_LOT",
  "ON_DRIVEWAY",
  "ON_STREET",
  "UNDERGROUND_GARAGE",
] as const;

/**
 * Reflects the general type of the charge point’s location. May be used for user information. Follows the OCPI 2.2.1 definition.
 *
 * - ALONG_MOTORWAY - Location on a parking facility/rest area along a motorway, freeway, interstate, highway etc.
 * - PARKING_GARAGE - Multistorey car park.
 * - PARKING_LOT - A cleared area that is intended for parking vehicles, i.e. at super markets, bars, etc.
 * - ON_DRIVEWAY - Location is on the driveway of a house/building.
 * - ON_STREET - Parking in public space along a street.
 * - UNDERGROUND_GARAGE - Multistorey car park, mainly underground.
 */
export type ParkingType = typeof ParkingTypeList[number];
