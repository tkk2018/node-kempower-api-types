import { ConnectorTransactionBase } from "./ConnectorTransactionBase.js";

/**
 * The type defination of the {@link https://docs.kempower.io/en/chargeye/api-reference/transactions/api/#operation/getLatestTransactionsForStations!c=200&path=property%20name*&t=response | TxInfo}
 */
export interface TxInfo extends ConnectorTransactionBase {

  /**
   * Note so far only seen `number`.
   */
  evseId: string | number;
};
