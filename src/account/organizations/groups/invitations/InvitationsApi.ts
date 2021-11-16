import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Invitation from '../../../../models/Invitation';
import PaginationResponse from '../../../../models/PaginationResponse';
import {InvitationListQueryParams, InvitationListQueryParamsBuilder} from './InvitationListQueryParams';

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
   * @summary Delete Invitation
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @param {string} invitationId Id of the invitation.
   * @throws {BitmovinError}
   * @memberof InvitationsApi
   */
  public delete(organizationId: string, groupId: string, invitationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId,
      invitation_id: invitationId
    };
    return this.restClient.delete<BitmovinResponse>('/account/organizations/{organization_id}/groups/{group_id}/invitations/{invitation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Invitation Details
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @param {string} invitationId Id of the invitation.
   * @throws {BitmovinError}
   * @memberof InvitationsApi
   */
  public get(organizationId: string, groupId: string, invitationId: string): Promise<Invitation> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId,
      invitation_id: invitationId
    };
    return this.restClient.get<Invitation>('/account/organizations/{organization_id}/groups/{group_id}/invitations/{invitation_id}', pathParamMap).then((response) => {
      return map(response, Invitation);
    });
  }

  /**
   * @summary List Invitations
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof InvitationsApi
   */
  public list(organizationId: string, groupId: string, queryParameters?: InvitationListQueryParams | ((q: InvitationListQueryParamsBuilder) => InvitationListQueryParamsBuilder)): Promise<PaginationResponse<Invitation>> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    let queryParams: InvitationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new InvitationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Invitation>>('/account/organizations/{organization_id}/groups/{group_id}/invitations', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Invitation>(response, Invitation);
    });
  }
}
