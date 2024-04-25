export interface TxSchedulePlanInfo {
  /**
   * Vehicle id, if known
   */
  evId?: string;

  /**
   * Schedule's stimated time of arrival ISO timestamp
   */
  plannedArrivalTime?: string;

  /**
   * Schedule's planned departure time ISO timestamp
   */
  plannedDepartureTime?: string;

  /**
   * Scheduled power usage (kW) for this transaction
   * @requires
   */
  powerkW: number;

  /**
   * How long this level of power usage is valid until, as determined by schedule
   * @requires
   */
  powerkWValidUntil: string;

  /**
   * Reference to the EvSchedule row (depot master schedule) which is being utilized, if any
   */
  scheduleId?: string;

  /**
   * Schedule's targeted battery state of charge %
   */
  targetSoC?: number;

  /**
   * Date and time when this information was last updated
   * @requires
   */
  updatedAt: string;
};
