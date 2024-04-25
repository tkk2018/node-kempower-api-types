const ReservationRestrictionTypeList = [
  "RESERVATION",
  "RESERVATION_EXPIRES",
] as const;

/**
 * - RESERVATION - Used in TariffElements to describe costs for a reservation
 * - RESERVATION_EXPIRES - Used in TariffElements to describe costs for a reservation that expires (i.e. driver does not start a charging session before expiry_date of the reservation)
 */
export type ReservationRestrictionType = typeof ReservationRestrictionTypeList[number];
