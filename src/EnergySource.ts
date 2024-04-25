import { EnergySourceCategory } from "./EnergySourceCategory.js";

export interface EnergySource {
  /**
   * Percentage of this source (0-100) in the mix
   */
  percentage: number;

  /**
   * Categories of energy sources.
   */
  source: EnergySourceCategory;
};
