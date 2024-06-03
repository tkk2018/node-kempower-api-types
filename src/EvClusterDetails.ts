export const ChargingPhaseList = [
  "CHARGING",
  "HANDSHAKE_NO_CURRENT",
  "HANDSHAKE_NO_SOC",
] as const;

export type ChargingPhase = typeof ChargingPhaseList[number];

export interface EvClusterDetails {
  artificialId?: string | null;
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
  clusterGroupId: string | null;
  clusterGroupName: string | null;
  coOccurrenceScore?: unknown | null;
};
