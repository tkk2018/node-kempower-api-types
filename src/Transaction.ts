import { ConnectionType } from "./ConnectionType.js";
import { EvseType } from "./EvseType.js";
import { IdToken } from "./IdToken.js";
import { PaymentDetails } from "./PaymentDetails.js";
import { PaymentState } from "./PaymentState.js";
import { PowerLimitation } from "./PowerLimitation.js";
import { SignedMeterValueType } from "./SignedMeterValueType.js";
import { TechnicalFailClassification } from "./TechnicalFailClassification.js";
import { TransactionAuthorizationMethod } from "./TransactionAuthorizationMethod.js";
import { TransactionBase } from "./TransactionBase.js";
import { TxSchedulePlanInfo } from "./TxSchedulePlanInfo.js";
import { Vehicle } from "./Vehicle.js";

interface ForecastTime {
  /**
   * Time in milliseconds
   */
  x: number;

  /**
   * State of charge
   */
  y: number;
};

interface ChargingForecast {
  /**
   * object may empty
   */
  chargeTimes: Record<string, string>;

  /**
   * object may empty
   */
  chargeTimesSeconds: Record<string, number>;

  histogram: ForecastTime[];
};

const ChargingPhaseList = [
  "CHARGING",
  "HANDSHAKE_NO_CURRENT",
  "HANDSHAKE_NO_SOC",
] as const;

type ChargingPhase = typeof ChargingPhaseList[number];

interface EvClusterDetails {
  artificialId: string | null;
  batteryChargeEstimate: number | null;
  batterySizeEstimate: number | null;
  chargingPhase: ChargingPhase | null;
  closestMatchClusterName: string | null;
  closestMatchId: string | null;
  clusterId: string | null;
  clusterName: string | null;
  displayName: string | null;
  initialClusterId: string | null;
  matchScore: number | null;
  stableEncodingPrediction: string | null;
};

const EvCommunicationStandardList = [
  "DIN",
  "ISO1",
  "ISODIS",
] as const;

/**
 * High level communication standard. ISO1 = ISO 15118, DIN = DIN 70121
 */
type EvCommunicationStandard = typeof EvCommunicationStandardList[number];

interface EvIdentify {
  clusteringTimestamp: string;

  /**
   * Name to diplay to users
   */
  displayName: string;

  seqNo: number;
};

/**
 * The type defination of the
 * - {@link https://docs.kempower.io/en/chargeye/api-reference/transactions/api/#operation/getTransactions!c=200&path=transactions&t=response | Transaction of List Transactions for a Charging Station}
 * - {@link https://docs.kempower.io/en/chargeye/api-reference/transactions/api/#operation/getTransactions2!c=200&path=transactions&t=response | Transaction of List Transactions}
 * - {@link https://docs.kempower.io/en/chargeye/api-reference/transactions/api/#operation/getTransaction!c=200&path=transaction&t=response | Transaction of Get a Transaction}
 */
export interface Transaction extends TransactionBase {
  /**
   * The time when session became active (authenticated and cable is connected)
   * @example
   * "2024-03-27T07:36:57.667Z"
   */
  activeStartTime?: string;

  actualEVSEId: string | number;

  /**
   * Ambient temperature at the start of the transaction in Celsius
   */
  ambientTemp: number;

  /**
   * True if user had authenticated at any point (be it in free mode, or auth accepted for rfid/remote)
   */
  authenticated: boolean;

  /**
   * Method of authorization
   */
  authorizationMethod: TransactionAuthorizationMethod;

  /**
   * Reference to the authorization given by the eMSP, when given, this reference will be provided in the relevant Session and/or CDR.
   *
   * Passed in by external party in OCPI command (StartSession).
   */
  authorizationReference?: string | null;

  avgPowerKw?: number;

  /**
   * True if cable has been connected to EV at any point of this session. May be inaccurate for CHAdeMO.
   */
  cableConnected: boolean;

  /**
   * how long the vehicle was charged (Updated at the end of the session)
   */
  chargingDurationMs: number;

  chargingEndAlarms?: string[];

  chargingForecast: ChargingForecast;

  chargingForecastV3: ChargingForecast;

  chargingForecastV3Model?: string;

  /**
   * Uniquely identifies the EV Driver contract token within the eMSP’s platform (and suboperator platforms). Recommended to follow the specification for eMA ID from "{@link http://emi3group.com/documents-links/ | eMI3 standard version V1.0}" "Part 2: business objects."
   *
   * Passed in by external party in OCPI command (StartSession).
   */
  contractId?: string | null;

  current: number;

  /**
   * How much current is reserved by the charger in Amperes
   */
  currentReservation?: number;

  /**
   * ID of the energy meter
   */
  eMeterId?: string;

  /**
   * Type of the EMV (Europay, MasterCard, Visa) Device. Only set if there is EMV present
   */
  emvDeviceType?: string | "PAYTER";

  endReasonDescription?: string;

  evCluster: EvClusterDetails;

  evCommunicationStandard?: EvCommunicationStandard;

  /**
   * Error code reported by EV
   */
  evErrorCode?: string;

  evIdentify: EvIdentify;

  /**
   * mac address of the electronic vehicle
   * @example "04:E7:7E:00:F0:FA"
   */
  evMacAddress?: string;

  /**
   * Maximum current EV can take.
   */
  evMaximumCurrent?: number;

  /**
   * Maximum power EV can take.
   */
  evMaximumPower?: number;

  /**
   * Maximum voltage EV can take.
   */
  evMaximumVoltage?: number;

  /**
   * run id of the electronic vehicle
   * @example "04:E7:7E:00:F0:FA:00:00"
   */
  evRunId?: string;

  /**
   * EVSE number that this transaction belongs to.
   */
  evseId: string;

  /**
   * Max output power of the evse
   */
  evseMaxPowerKw: number;

  /**
   * Maximum power in kilowatts that this connector could output if grid limit was not imposed
   */
  evseMaxPowerKwWithoutDynamicLimit?: number;

  /**
   * Maximum power in kilowatts that this connector could output if grid limit was not imposed (unrounded figure)
   */
  evseMaxPowerKwWithoutDynamicLimitActual?: number;

  /**
   * Maximum power in kilowatts that this connector could output (unrounded figure)
   */
  evseMaxPowerkWActual?: number;

  /**
   * Maximum power in kilowatts, effectively, that this connector can output for new sessions (with regards to the current charger usage with dynamics)
   */
  evseMaxPowerkWPresent?: number;

  /**
   * Maximum power in kilowatts, effectively, that this connector can output for new sessions (with regards to the current charger usage with dynamics) (unrounded figure)
   */
  evseMaxPowerkWPresentActual?: number;

  evseName: string;

  evseType: EvseType;

  idToken?: IdToken;

  locationId?: string | null;

  locationUid: string;

  /**
   * Session max cost in cents / reserved amount of cents. Cent = one-hundredth of the used main curency, example 1 cent = 1 penny for £ and 1 cent = 1 cenfor €
   */
  maxCostCents?: number;

  maxPowerKw?: number;

  /**
   * ocpiConnectionProfileId If found, send session data to party related to this ocpi connection.
   */
  ocpiConnectionProfileId?: string | null;

  partnerId?: string;

  /**
   * ISO-4217 code of the currency used
   * @example "GBP"
   */
  paymentCurrency?: string;

  /**
   * Information about the payment details related to the transaction.
   */
  paymentDetails?: PaymentDetails;

  /**
   * Payment reference number as decided by the Charger.
   */
  paymentReference?: number;

  /**
   * Unique ID for this payment session, as generated by the EMV terminal
   */
  paymentSessionId?: string | number;

  /**
   * State of the payment
   */
  paymentState?: PaymentState;

  /**
   * Temperature of negative pin of the EVSE in Celsius
   */
  pin1temp?: number;

  /**
   * Temperature of positive pin of the EVSE in Celsius
   */
  pin2temp?: number;

  /**
   * Current power watts
   */
  power: number;

  powerLimitation?: PowerLimitation;

  remoteStartId?: string;

  remoteTransactionId?: number;

  /**
   * Information about a scheduled charging in relation to this transaction
   */
  schedulePlan?: TxSchedulePlanInfo;

  /**
   * Sequence number to help indentify newest transaction update
   */
  sequenceNumber: number;

  /**
   * how long the session was in total (Updated at the end of the session)
   */
  sessionDurationMs: number;

  signedEnergyMeterValue?: SignedMeterValueType;

  simulated?: boolean;

  /**
   * State of Charge at the end of the transaction
   */
  socEnd?: number;

  /**
   * State of Charge at the beginning of the transaction
   */
  socStart?: number;

  sourceConnectionType?: ConnectionType;

  stationId: string;

  /**
   * Current voltage target.
   *
   * NOTE: During charging this is not the actual voltage supplied to the battery but the voltage that will eventually be reached once the battery is full.
   */
  targetCurrent?: number;

  /**
   * Maximum voltage EV can take.
   */
  targetVoltage?: number;

  technicalFailClassification?: TechnicalFailClassification;

  /**
   * How many seconds until battery capacity reaches xx% of the total (xx usually 80), or undefined if not known
   */
  timeToBulk?: number;

  /**
   * How many seconds until battery is full, or undefined if not known
   */
  timeToFull?: number;

  /**
   * Can't be greater than maxCostCents
   */
  totalCostCents?: number;

  /**
   * Actual date when changes were made to the transaction
   */
  updateTime?: string;

  vehicle?: Vehicle;

  voltage: number;

  waitingForPaymentReservation?: boolean;
};
