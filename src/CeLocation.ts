import { BusinessDetails } from "./BusinessDetails.js";
import { CeCommonLabel } from "./CeCommonLabel.js";
import { NamedLocation } from "./NamedLocation.js";
import { TenantId } from "./TenantId.js";

type minLon = number;
type maxLat = number;
type maxLon = number;
type minLat = number;

/**
 * The type defination of the {@link https://docs.kempower.io/en/chargeye/api-reference/locations/api/#operation/postLocation!path=location&t=request | PostedCeLocation}.
 */
export interface PostedCeLocation extends NamedLocation {
  /**
   * GeoJson line string bounding box. [[minLon, maxLat], [maxLon, minLat]]
   */
  bounds?: [
    [minLon, maxLat],
    [maxLon, minLat]
  ] | null;

  city?: string | null;

  country?: string | null;

  /**
   * Country code in ISO 3166 alpha 2 format, two letter code
   */
  countryCode?: string | null;

  /**
   * Any other GeoJson features, such as satellite placements. Features array.
   */
  geo?: unknown[];

  labels?: CeCommonLabel[] | null;

  /**
   * The locationId field is allocated for customers to assign their internal location reference ID for flexibility.
   */
  locationId?: string | null;

  /**
   * Represents the business details of an operator, suboperator or owner.
   */
  operator?: BusinessDetails | null;

  /**
   * Postal code of the location. Max 10 characters.
   */
  postalCode?: string | null;

  roamingPoolId?: string | null;
};

/**
 * The type defination of the {@link https://docs.kempower.io/en/chargeye/api-reference/locations/api/#operation/getLocation!c=200&path=location&t=response | CensoredRowWithTenancy&lt;LocationRow&gt;}.
 */
export interface CeLocation extends PostedCeLocation, TenantId {
  /**
   * location uid
   * @requires
   */
  id: string;
};
