import { ConnectorStatus } from "./ConnectorStatus.js";
import { ConnectorType } from "./ConnectorType.js";
import { LastConnectorTransaction } from "./LastConnectorTransaction.js";

export interface Connector {
  /**
   * @requires
   */
  connectorId: string;

  /**
   * @requires
   */
  lastTransaction: LastConnectorTransaction;

  /**
   * @requires
   */
  maxPowerKw: number;

  /**
   * @requires
   */
  maxPowerKwActual: number;

  /**
   * @requires
   */
  name: string;

  /**
   * @requires
   */
  status: ConnectorStatus;

  /**
   * @requires
   */
  type: ConnectorType;
};
