import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import OrganizationPendingInvitation from '../../../models/OrganizationPendingInvitation';
import PaginationResponse from '../../../models/PaginationResponse';

/**
 * InvitationsApi - object-oriented interface
 * @export
 * @class InvitationsApi
 * @extends {BaseAPI}
 */
export default class InvitationsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List all pending invitations of an org id
   * @param {string} organizationId Id of the organization
   * @throws {BitmovinError}
   * @memberof InvitationsApi
   */
  public list(organizationId: string): Promise<PaginationResponse<OrganizationPendingInvitation>> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.get<PaginationResponse<OrganizationPendingInvitation>>('/account/organizations/{organization_id}/invitations', pathParamMap).then((response) => {
      return new PaginationResponse<OrganizationPendingInvitation>(response, OrganizationPendingInvitation);
    });
  }
}
