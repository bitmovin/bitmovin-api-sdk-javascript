import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import SpekeApi from './speke/SpekeApi';

/**
 * DrmApi - object-oriented interface
 * @export
 * @class DrmApi
 * @extends {BaseAPI}
 */
export default class DrmApi extends BaseAPI {
  public speke: SpekeApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.speke = new SpekeApi(configuration);
  }
}
