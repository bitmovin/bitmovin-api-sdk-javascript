import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import TenantWithGroups from '../../../models/TenantWithGroups';
import PaginationResponse from '../../../models/PaginationResponse';

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
   * @summary List all Tenants with their groups for a given organization
   * @param {string} organizationId Id of the organization
   * @throws {BitmovinError}
   * @memberof TenantsApi
   */
  public list(organizationId: string): Promise<PaginationResponse<TenantWithGroups>> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.get<PaginationResponse<TenantWithGroups>>('/account/organizations/{organization_id}/tenants', pathParamMap).then((response) => {
      return new PaginationResponse<TenantWithGroups>(response, TenantWithGroups);
    });
  }
}
