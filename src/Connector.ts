import { ConnectorStatus } from "./ConnectorStatus.js";
import { ConnectorType } from "./ConnectorType.js";
import { LastConnectorTransaction } from "./LastConnectorTransaction.js";

export interface Connector {
  /**
   * Note that this is unique only within each charging station.
   * Meaning that the connector ID of charging station A may be the same as the connector ID of charging station B.
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
