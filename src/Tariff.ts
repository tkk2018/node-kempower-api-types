import { EnergyMix } from "./EnergyMix.js";
import { Price } from "./Price.js";
import { TariffDisplayText } from "./TariffDisplayText.js";
import { TariffElement } from "./TariffElement.js";
import { TariffType } from "./TariffType.js";
import { TariffVersion } from "./TariffVersion.js";

export interface Tariff {
  /**
   * ISO-3166 alpha-2 country code of the CPO that owns this Tariff
   * @requires
   */
  country_code: string;

  /**
   * ISO-4217 code of the currency of this tariff
   * @requires
   */
  currency: string;

  /**
   * List of Tariff Elements
   * @requires
   */
  elements: TariffElement;

  /**
   * RFC 3339 UTC timestamp The time after which this tariff is no longer ali, in UTC, time_zone field of the Location can be used to conver to local time. Typically used when this tariff is going to be replaced with a different tariff in the near future. See OCPI 2.2-d2 section 11.3.1 for more information
   */
  end_date_time?: string;

  /**
   * This type is used to specify the energy mix and environmental impact of the supplied energy at a location or in a tariff.
   */
  energy_mix?: EnergyMix;

  /**
   * Uniquely identifies the tariff within the CPO's platform (and suboperator platforms)
   * @requires
   */
  id: string;

  /**
   * RFC 3339 UTC timestamp Timestamp when this Tariff was last updated (or created)
   */
  last_updated?: string;

  max_price?: Price;

  min_price?: Price;

  /**
   * CPO ID of the CPO that own this Tariff (following the ISO-15118 standard)
   * @requires
   */
  party_id: string;

  /**
   * RFC 3339 UTC timestamp The time when this tariff becomes active, in UTC, time_zone field of the Location can be used to convert to local time. Typically used for a new tariff that is already given with the location, before it becomes active. See OCPI 2.2-d2 section 11.3.1 for more information
   */
  start_date_time?: string;

  /**
   * List of multi-language alternative tariff info texts
   */
  tariff_alt_text?: TariffDisplayText;

  /**
   * URL to a web page that contains an explanation of the tariff information in human readable form
   */
  tariff_alt_url?: string;

  tariff_version?: TariffVersion;

  type?: TariffType;
};
