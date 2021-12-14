import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import VodApi from './vod/VodApi';

/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
export default class JobsApi extends BaseAPI {
  public vod: VodApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.vod = new VodApi(configuration);
  }
}
