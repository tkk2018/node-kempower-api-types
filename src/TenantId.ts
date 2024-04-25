/**
 * For {@link https://docs.kempower.io/en/chargeye/api-reference/locations/api/#operation/getLocation!c=200&path=location&t=response | CeLocation} to implement.
 */
export interface TenantId {
  /**
   * @requires
   */
  tenantIdCPO: string;

  /**
   * @requires
   */
  tenantIdEMSP: string;

  tenantIdMaintenance?: string;

  /**
   * Which tenants has access to this row
   * @requires
   */
  tenantIds: string[];
};
