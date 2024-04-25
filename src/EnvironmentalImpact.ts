import { EnvironmentalImpactCategory } from "./EnvironmentalImpactCategory.js";

export interface EnvironmentalImpact {
  /**
   * Amount of this portion in g/kWh
   */
  amount: number;

  /**
   * Categories of environmental impact values.
   */
  category: EnvironmentalImpactCategory;
}