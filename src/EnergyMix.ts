import { EnergySource } from "./EnergySource.js";
import { EnvironmentalImpact } from "./EnvironmentalImpact.js";

export interface EnergyMix {
  /**
   * Name of the energy suppliers product/tariff plan used at this location. (this field can be used to look-up energy qualification or to show it directly to the customer (for well-known brands like Greenpeace Energy, etc.))
   */
  energy_product_name: string;

  /**
   * Key-value pairs (enum + percentage) of energy sources of this location's tariff
   */
  energy_sources: EnergySource[];

  /**
   * Key-value pairs (enum + percentage) of nuclear waste and CO2 exhaust of this location's tariff
   */
  environ_impact: EnvironmentalImpact[];

  /**
   * True if 100% regenerative sources. (CO2 and nuclear waste is zero)
   */
  is_green_energy: boolean;

  /**
   * Name of the energy supplier, delivering the energy for this location or tariff. (this field can be used to look-up energy qualification or to show it directly to the customer (for well-known brands like Greenpeace Energy, etc.))
   */
  supplier_name: string;
};
