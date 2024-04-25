import { HVAC } from "./HVAC.js";

export interface V2icpParameters {
  /**
   * If wish to override ambient temperature for testing purposes
   */
  ambientTemp?: number | null;

  interiorHvac: HVAC;

  /**
   * General preconditioning - DMS = Depot Management System
   */
  preconditioning: boolean;
};
