import { ConnectorTransactionBase } from "./ConnectorTransactionBase.js";
import { PowerLimitation } from "./PowerLimitation.js";
import { TxSchedulePlanInfo } from "./TxSchedulePlanInfo.js";

export interface LastConnectorTransaction extends ConnectorTransactionBase {
  powerLimitation?: PowerLimitation;

  /**
   * Information about a scheduled charging in relation to this transaction
   */
  schedulePlan: TxSchedulePlanInfo;

  updateTime: string;
};
