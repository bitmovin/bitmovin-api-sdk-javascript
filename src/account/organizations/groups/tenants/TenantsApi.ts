import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Tenant from '../../../../models/Tenant';
import PaginationResponse from '../../../../models/PaginationResponse';

/**
 * TenantsApi - object-oriented interface
 * @export
 * @class TenantsApi
 * @extends {BaseAPI}
 */
export default class TenantsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Tenant to Group
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @param {Tenant} tenant Tenant details
   * @throws {BitmovinError}
   * @memberof TenantsApi
   */
  public create(organizationId: string, groupId: string, tenant?: Tenant): Promise<Tenant> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    return this.restClient.post<Tenant>('/account/organizations/{organization_id}/groups/{group_id}/tenants', pathParamMap, tenant).then((response) => {
      return map(response, Tenant);
    });
  }

  /**
   * @summary Delete Tenant
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @param {string} tenantId Id of the tenant.
   * @throws {BitmovinError}
   * @memberof TenantsApi
   */
  public delete(organizationId: string, groupId: string, tenantId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId,
      tenant_id: tenantId
    };
    return this.restClient.delete<BitmovinResponse>('/account/organizations/{organization_id}/groups/{group_id}/tenants/{tenant_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Tenant Details
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @param {string} tenantId Id of the tenant.
   * @throws {BitmovinError}
   * @memberof TenantsApi
   */
  public get(organizationId: string, groupId: string, tenantId: string): Promise<Tenant> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId,
      tenant_id: tenantId
    };
    return this.restClient.get<Tenant>('/account/organizations/{organization_id}/groups/{group_id}/tenants/{tenant_id}', pathParamMap).then((response) => {
      return map(response, Tenant);
    });
  }

  /**
   * @summary List Tenants
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @throws {BitmovinError}
   * @memberof TenantsApi
   */
  public list(organizationId: string, groupId: string): Promise<PaginationResponse<Tenant>> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    return this.restClient.get<PaginationResponse<Tenant>>('/account/organizations/{organization_id}/groups/{group_id}/tenants', pathParamMap).then((response) => {
      return new PaginationResponse<Tenant>(response, Tenant);
    });
  }
}
