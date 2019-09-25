import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import SettingsApi from './settings/SettingsApi';

/**
 * OrganizationsApi - object-oriented interface
 * @export
 * @class OrganizationsApi
 * @extends {BaseAPI}
 */
export default class OrganizationsApi extends BaseAPI {
  public settings: SettingsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.settings = new SettingsApi(configuration);
  }
}
