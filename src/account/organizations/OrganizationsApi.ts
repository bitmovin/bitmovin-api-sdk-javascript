import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import SubOrganizationsApi from './subOrganizations/SubOrganizationsApi';
import GroupsApi from './groups/GroupsApi';
import Organization from '../../models/Organization';
import PaginationResponse from '../../models/PaginationResponse';
import {getType, map} from '../../common/Mapper';

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
   * @param {Organization} organization Orgnaization Details
   * @throws {RequiredError}
   * @memberof OrganizationsApi
   */
  public create(organization?: Organization): Promise<Organization> {
    return this.restClient.post<Organization>('/account/organizations', {}, organization).then((response) => {
      return new Organization(response);
    });
  }

  /**
   * @summary Organization Details
   * @param {string} organizationId ID of the organization
   * @throws {RequiredError}
   * @memberof OrganizationsApi
   */
  public get(organizationId: string): Promise<Organization> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.get<Organization>('/account/organizations/{organization_id}', pathParamMap).then((response) => {
      return new Organization(response);
    });
  }

  /**
   * @summary List Organizations
   * @throws {RequiredError}
   * @memberof OrganizationsApi
   */
  public list(): Promise<PaginationResponse<Organization>> {
    return this.restClient.get<PaginationResponse<Organization>>('/account/organizations', {}).then((response) => {
      const paginationResponse = new PaginationResponse<Organization>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Organization(i));
      }
      return paginationResponse;
    });
  }
}
