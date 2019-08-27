import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import Organization from '../../../models/Organization';
import PaginationResponse from '../../../models/PaginationResponse';

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
   * @throws {RequiredError}
   * @memberof SubOrganizationsApi
   */
  public list(organizationId: string): Promise<PaginationResponse<Organization>> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.get<PaginationResponse<Organization>>('/account/organizations/{organization_id}/sub-organizations', pathParamMap).then((response) => {
      return new PaginationResponse<Organization>(response, Organization);;
    });
  }
}
