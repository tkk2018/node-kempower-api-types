import { ConnectorStatus } from "./ConnectorStatus.js";
import { ConnectorType } from "./ConnectorType.js";
import { LastConnectorTransaction } from "./LastConnectorTransaction.js";

export interface Connector {
  /**
   * Note that this is unique only within each charging station.
   * Meaning that the connector ID of charging station A may be the same as the connector ID of charging station B.
   * @requires
   * @example "12"
   */
  connectorId: string;

  lastTransaction: LastConnectorTransaction | null;

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
   * @example "Nozzle 1"
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
