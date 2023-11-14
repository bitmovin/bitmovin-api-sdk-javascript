import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import SearchApi from './search/SearchApi';
import VideoApi from './video/VideoApi';
import LiveApi from './live/LiveApi';
import SigningKeysApi from './signingKeys/SigningKeysApi';

/**
 * StreamsApi - object-oriented interface
 * @export
 * @class StreamsApi
 * @extends {BaseAPI}
 */
export default class StreamsApi extends BaseAPI {
  public search: SearchApi;
  public video: VideoApi;
  public live: LiveApi;
  public signingKeys: SigningKeysApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.search = new SearchApi(configuration);
    this.video = new VideoApi(configuration);
    this.live = new LiveApi(configuration);
    this.signingKeys = new SigningKeysApi(configuration);
  }
}
