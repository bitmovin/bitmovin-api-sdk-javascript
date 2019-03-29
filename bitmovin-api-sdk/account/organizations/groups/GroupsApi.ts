import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import TenantsApi from './tenants/TenantsApi';
import PermissionsApi from './permissions/PermissionsApi';
import BitmovinResource from '../../../models/BitmovinResource';
import BitmovinResponse from '../../../models/BitmovinResponse';
import Group from '../../../models/Group';
import PaginationResponse from '../../../models/PaginationResponse';

/**
 * GroupsApi - object-oriented interface
 * @export
 * @class GroupsApi
 * @extends {BaseAPI}
 */
export default class GroupsApi extends BaseAPI {
  public tenants: TenantsApi;
  public permissions: PermissionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.tenants = new TenantsApi(configuration);
    this.permissions = new PermissionsApi(configuration);
  }

  /**
   * @summary Add Group
   * @param {string} organizationId Id of the organization
   * @param {Group} [group] Tenant Group details
   * @throws {RequiredError}
   * @memberof GroupsApi
   */
  public create(organizationId: string, group?: Group): Promise<Group> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.post<Group>('/account/organizations/{organization_id}/groups', pathParamMap, group).then((response) => {
      return new Group(response);
    });
  }

  /**
   * @summary Delete Group
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group
   * @throws {RequiredError}
   * @memberof GroupsApi
   */
  public delete(organizationId: string, groupId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    return this.restClient.delete<BitmovinResponse>('/account/organizations/{organization_id}/groups/{group_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Group Details
   * @param {string} organizationId Id of the organization
   * @param {string} groupId Id of the group.
   * @throws {RequiredError}
   * @memberof GroupsApi
   */
  public get(organizationId: string, groupId: string): Promise<Group> {
    const pathParamMap = {
      organization_id: organizationId,
      group_id: groupId
    };
    return this.restClient.get<Group>('/account/organizations/{organization_id}/groups/{group_id}', pathParamMap).then((response) => {
      return new Group(response);
    });
  }

  /**
   * @summary List Groups
   * @param {string} organizationId Id of the organization
   * @throws {RequiredError}
   * @memberof GroupsApi
   */
  public list(organizationId: string): Promise<PaginationResponse<Group>> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.get<PaginationResponse<Group>>('/account/organizations/{organization_id}/groups', pathParamMap).then((response) => {
      const paginationResponse = new PaginationResponse<Group>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Group(i));
      }
      return paginationResponse;
    });
  }
}
