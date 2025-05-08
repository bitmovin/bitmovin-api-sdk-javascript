import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import TenantsApi from './tenants/TenantsApi';
import InvitationsApi from './invitations/InvitationsApi';
import PermissionsApi from './permissions/PermissionsApi';
import BitmovinResource from '../../../models/BitmovinResource';
import BitmovinResponse from '../../../models/BitmovinResponse';
import Group from '../../../models/Group';
import PaginationResponse from '../../../models/PaginationResponse';
import {GroupListQueryParams, GroupListQueryParamsBuilder} from './GroupListQueryParams';

/**
 * GroupsApi - object-oriented interface
 * @export
 * @class GroupsApi
 * @extends {BaseAPI}
 */
export default class GroupsApi extends BaseAPI {
  public tenants: TenantsApi;
  public invitations: InvitationsApi;
  public permissions: PermissionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.tenants = new TenantsApi(configuration);
    this.invitations = new InvitationsApi(configuration);
    this.permissions = new PermissionsApi(configuration);
  }

  /**
   * @summary Add Group
   * @param {string} organizationId Id of the organization
   * @param {Group} group Tenant Group details
   * @throws {BitmovinError}
   * @memberof GroupsApi
   */
  public create(organizationId: string, group?: Group): Promise<Group> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.post<Group>('/account/organizations/{organization_id}/groups', pathParamMap, group).then((response) => {
      return map(response, Group);
    });
  }

  /**
   * @summary Delete Group
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @throws {BitmovinError}
   * @memberof GroupsApi
   */
  public delete(organizationId: string, groupId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    return this.restClient.delete<BitmovinResponse>('/account/organizations/{organization_id}/groups/{group_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Group Details
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group.
   * @throws {BitmovinError}
   * @memberof GroupsApi
   */
  public get(organizationId: string, groupId: string): Promise<Group> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    return this.restClient.get<Group>('/account/organizations/{organization_id}/groups/{group_id}', pathParamMap).then((response) => {
      return map(response, Group);
    });
  }

  /**
   * @summary List Groups
   * @param {string} organizationId Id of the organization
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof GroupsApi
   */
  public list(organizationId: string, queryParameters?: GroupListQueryParams | ((q: GroupListQueryParamsBuilder) => GroupListQueryParamsBuilder)): Promise<PaginationResponse<Group>> {
    const pathParamMap = {
      organization_id: organizationId
    };
    let queryParams: GroupListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new GroupListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Group>>('/account/organizations/{organization_id}/groups', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Group>(response, Group);
    });
  }
}
