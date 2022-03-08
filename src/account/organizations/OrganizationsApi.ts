import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import SubOrganizationsApi from './subOrganizations/SubOrganizationsApi';
import GroupsApi from './groups/GroupsApi';
import Organization from '../../models/Organization';
import UpdateOrganizationRequest from '../../models/UpdateOrganizationRequest';
import PaginationResponse from '../../models/PaginationResponse';

/**
 * OrganizationsApi - object-oriented interface
 * @export
 * @class OrganizationsApi
 * @extends {BaseAPI}
 */
export default class OrganizationsApi extends BaseAPI {
  public subOrganizations: SubOrganizationsApi;
  public groups: GroupsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.subOrganizations = new SubOrganizationsApi(configuration);
    this.groups = new GroupsApi(configuration);
  }

  /**
   * @summary Add Organization
   * @param {Organization} organization Organization Details
   * @throws {BitmovinError}
   * @memberof OrganizationsApi
   */
  public create(organization?: Organization): Promise<Organization> {
    return this.restClient.post<Organization>('/account/organizations', {}, organization).then((response) => {
      return map(response, Organization);
    });
  }

  /**
   * @summary Organization Details
   * @param {string} organizationId ID of the organization
   * @throws {BitmovinError}
   * @memberof OrganizationsApi
   */
  public get(organizationId: string): Promise<Organization> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.get<Organization>('/account/organizations/{organization_id}', pathParamMap).then((response) => {
      return map(response, Organization);
    });
  }

  /**
   * @summary List Organizations
   * @throws {BitmovinError}
   * @memberof OrganizationsApi
   */
  public list(): Promise<PaginationResponse<Organization>> {
    return this.restClient.get<PaginationResponse<Organization>>('/account/organizations', {}).then((response) => {
      return new PaginationResponse<Organization>(response, Organization);
    });
  }

  /**
   * @summary Update Organization
   * @param {string} organizationId ID of the organization
   * @param {UpdateOrganizationRequest} updateOrganizationRequest Organization Details fields to be updated
   * @throws {BitmovinError}
   * @memberof OrganizationsApi
   */
  public update(organizationId: string, updateOrganizationRequest?: UpdateOrganizationRequest): Promise<Organization> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.put<Organization>('/account/organizations/{organization_id}', pathParamMap, updateOrganizationRequest).then((response) => {
      return map(response, Organization);
    });
  }
}
