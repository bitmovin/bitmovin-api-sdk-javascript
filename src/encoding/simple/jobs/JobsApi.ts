import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import VodApi from './vod/VodApi';
import LiveApi from './live/LiveApi';

/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
export default class JobsApi extends BaseAPI {
  public vod: VodApi;
  public live: LiveApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.vod = new VodApi(configuration);
    this.live = new LiveApi(configuration);
  }
}
