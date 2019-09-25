import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import OrganizationsApi from './organizations/OrganizationsApi';

/**
 * InsightsApi - object-oriented interface
 * @export
 * @class InsightsApi
 * @extends {BaseAPI}
 */
export default class InsightsApi extends BaseAPI {
  public organizations: OrganizationsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.organizations = new OrganizationsApi(configuration);
  }
}
