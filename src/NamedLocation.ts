export interface NamedLocation {
  address?: string;

  /**
   * Central point. GEO location, latitude
   */
  lat?: number;

  /**
   * Central point. GEO location, longitude
   */
  lng?: number;

  name?: string;
};
