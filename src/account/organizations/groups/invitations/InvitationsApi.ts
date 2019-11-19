import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import Invitation from '../../../../models/Invitation';
import PaginationResponse from '../../../../models/PaginationResponse';

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
   * @summary Add Invitation to Group
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @param {Invitation} invitation Invitation details
   * @throws {BitmovinError}
   * @memberof InvitationsApi
   */
  public create(organizationId: string, groupId: string, invitation?: Invitation): Promise<Invitation> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    return this.restClient.post<Invitation>('/account/organizations/{organization_id}/groups/{group_id}/invitations', pathParamMap, invitation).then((response) => {
      return map(response, Invitation);
    });
  }

  /**
   * @summary List Invitations
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @throws {BitmovinError}
   * @memberof InvitationsApi
   */
  public list(organizationId: string, groupId: string): Promise<PaginationResponse<Invitation>> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    return this.restClient.get<PaginationResponse<Invitation>>('/account/organizations/{organization_id}/groups/{group_id}/invitations', pathParamMap).then((response) => {
      return new PaginationResponse<Invitation>(response, Invitation);
    });
  }
}
