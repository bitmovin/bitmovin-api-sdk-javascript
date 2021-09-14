import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import Organization from '../../../models/Organization';
import PaginationResponse from '../../../models/PaginationResponse';
import {OrganizationListQueryParams, OrganizationListQueryParamsBuilder} from './OrganizationListQueryParams';

/**
 * SubOrganizationsApi - object-oriented interface
 * @export
 * @class SubOrganizationsApi
 * @extends {BaseAPI}
 */
export default class SubOrganizationsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Organizations under given parent organization
   * @param {string} organizationId ID of the parent organization
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SubOrganizationsApi
   */
  public list(organizationId: string, queryParameters?: OrganizationListQueryParams | ((q: OrganizationListQueryParamsBuilder) => OrganizationListQueryParamsBuilder)): Promise<PaginationResponse<Organization>> {
    const pathParamMap = {
      organization_id: organizationId
    };
    let queryParams: OrganizationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new OrganizationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Organization>>('/account/organizations/{organization_id}/sub-organizations', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Organization>(response, Organization);
    });
  }
}
