/**
 * The type defination of {@link https://docs.kempower.io/en/chargeye/api-reference/transactions/api/#operation/getTransaction!c=200&path=transaction/paymentDetails/void&t=response | EmvStateDetail}.
 */
export interface EmvStateDetail {
  /**
   * TransactionAcquirer identifier
   */
  acquirerId: string | number;

  /**
   * Transaction reference from the acquirer
   */
  acquirerTransactionReference: string;

  /**
   * Authorization code received from the acquirer
   */
  authenticationCode: string;

  /**
   * SIX transaction reference
   */
  sixTransactionReference: string;

  /**
   * Terminal transaction reference
   */
  terminalTransactionReference: string;

  /**
   * Time when the terminal authorized the payment session
   */
  transactionTimestamp: string;

  /**
   * additional property
   */
  [property_name: string]: unknown;
};
