import { EndReason } from "./EndReason.js";
import { StartReason } from "./StartReason.js";
import { TransactionIdentifier } from "./TransactionIdentifier.js";
import { TransactionStatus } from "./TransactionStatus.js";
import { TransactionStatusUpdateTriggerReason } from "./TransactionStatusUpdateTriggerReason.js";

/**
 * The abstract of transaction to share the common properties.
 * Please check to the concreate class.
 */
export interface TransactionBase extends TransactionIdentifier {
  /**
   * Energy charged into the vehicle
   */
  chargedEnergyKwh?: number;

  /**
   * why charging ended
   */
  chargingEndReason?: EndReason;

  chargingEndTime?: string | null;

  chargingStartReason?: StartReason;

  chargingStartTime?: string;

  endReason?: EndReason;

  /**
   * Transaction end time.
   */
  endTime?: string;

  energyLimitKwh?: number;

  /**
   * Power kilowatt present, max, avg
   */
  powerKw?: number | null;

  /**
   * Current SoC
   */
  soc?: number;

  /**
   * was the transaction soc limited to something
   */
  socLimit?: number;

  startReason?: StartReason;

  /**
   * Transaction start time.
   * @requires
   * @example
   * "2023-11-12T15:43:12.266Z"
   */
  startTime?: string;

  status?: TransactionStatus;

  /**
   * was the transaction time limited to something
   */
  timeLimitMs?: number;

  /**
   * @requires
   */
  triggerReason: TransactionStatusUpdateTriggerReason;
};
