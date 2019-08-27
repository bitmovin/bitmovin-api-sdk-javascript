import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import InformationApi from './information/InformationApi';
import LoginApi from './login/LoginApi';
import LimitsApi from './limits/LimitsApi';
import ApiKeysApi from './apiKeys/ApiKeysApi';
import OrganizationsApi from './organizations/OrganizationsApi';

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export default class AccountApi extends BaseAPI {
  public information: InformationApi;
  public login: LoginApi;
  public limits: LimitsApi;
  public apiKeys: ApiKeysApi;
  public organizations: OrganizationsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.information = new InformationApi(configuration);
    this.login = new LoginApi(configuration);
    this.limits = new LimitsApi(configuration);
    this.apiKeys = new ApiKeysApi(configuration);
    this.organizations = new OrganizationsApi(configuration);
  }
}
