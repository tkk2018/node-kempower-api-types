const HVACList = [
  "HotWaterAndHeating",
  "NoHotWaterCoolingOrVentilation",
  "NoPreconditioning",
  "OnlyHotWaterAndVentilation",
] as const;

/**
 * Interior HVAC preconditioning - HVAC = Heating, Ventilation, Air Conditioning
 */
export type HVAC = typeof HVACList[number];
