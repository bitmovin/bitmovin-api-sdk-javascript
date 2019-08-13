import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import WebApi from './web/WebApi';
import {getType, map} from '../../common/Mapper';

/**
 * CustomBuildsApi - object-oriented interface
 * @export
 * @class CustomBuildsApi
 * @extends {BaseAPI}
 */
export default class CustomBuildsApi extends BaseAPI {
  public web: WebApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.web = new WebApi(configuration);
  }
}
