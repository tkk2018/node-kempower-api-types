/**
 * The type defination of {@link https://docs.kempower.io/en/chargeye/api-reference/locations/api/#operation/getLocationStations!c=200&path=stations/manufacturingInfo&t=response | StationManufacturingInfo}.
 */
export interface StationManufacturingInfo {
  /**
   * Date when charger was shippped to customer
   * @example
   * "2023-10-12"
   */
  deliveryDate: string | null;

  /**
   * Additional order numbers e.g. subsidiary orders. The list may empty.
   */
  extraOrder: string[] | null;

  /**
   * Kempower order number
   */
  orderNumber: string | null;

  /**
   * Original customer id
   */
  partnerId: string | null;

  /**
   * Original customer name
   */
  partnerName: string | null;

  /**
   * Product code e.g. C502P240ND4
   */
  productId: string;

  /**
   * e.g. Charging Power Unit 500V/300kW/D4
   */
  productName: string;

  /**
   * Serial number when manufactured
   */
  serialNumber: string;

  /**
   * e.g. Inventory
   */
  serialNumberStatus: string | null;

  /**
   * e.g. DEMO
   */
  stock: string | null;
};
