import { ConnectorType } from "./ConnectorType.js";
import { TransactionBase } from "./TransactionBase.js";

/**
 * The abstract of transaction of a connector to share the common properties.
 * Please check to the concreate class.
 */
export interface ConnectorTransactionBase extends TransactionBase {
  authorizationToken?: string;
  connectorId?: string;
  connectorName?: string;
  connectorType?: ConnectorType;
  powerKwAvg?: number;
  powerKwMax?: number;
  socInitial?: number;
};
