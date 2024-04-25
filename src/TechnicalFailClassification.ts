const TechnicalFailClassificationList = [
  "ABRUPTLY_CANCELED",
  "ABRUPT_STOP",
  "HANDSHAKE_CANCELED",
  "HANDSHAKE_FAIL",
  "INVALID_SESSION",
  "INVALID_USER",
  "LOW_POWER",
  "NOT_IDENTIFIED",
  "NOT_PLUGGED_IN",
  "OK",
] as const;

/**
 * * OK - normal successful charging
 * * LOW_POWER - charging is normal, but charging power is very low (<= 1kW) for some reason - indications of a charging problem
 * * NOT_IDENTIFIED - cable connected, but not authed
 * * NOT_PLUGGED_IN - authed, but cable not connected
 * * HANDSHAKE_FAIL - cable connected and authed, but charging was not started
 * * HANDSHAKE_CANCELED - charging didn't start - user stopped charging from charger, car or mobile phone during the preparation for charging (user-driven stop)
 * * INVALID_SESSION - cable not connected and not authed
 * * ABRUPTLY_CANCELED - user stopped charging in less than 10 seconds after start
 * * ABRUPT_STOP - charging ended in less than 10 seconds after start without user stopping it
 * * INVALID_USER - remote system stopped charging as unauthorized
 */
export type TechnicalFailClassification = typeof TechnicalFailClassificationList[number];
