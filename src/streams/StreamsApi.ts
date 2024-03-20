import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import VideoApi from './video/VideoApi';
import LiveApi from './live/LiveApi';
import ConfigApi from './config/ConfigApi';
import SearchApi from './search/SearchApi';
import SigningKeysApi from './signingKeys/SigningKeysApi';

/**
 * StreamsApi - object-oriented interface
 * @export
 * @class StreamsApi
 * @extends {BaseAPI}
 */
export default class StreamsApi extends BaseAPI {
  public video: VideoApi;
  public live: LiveApi;
  public config: ConfigApi;
  public search: SearchApi;
  public signingKeys: SigningKeysApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.video = new VideoApi(configuration);
    this.live = new LiveApi(configuration);
    this.config = new ConfigApi(configuration);
    this.search = new SearchApi(configuration);
    this.signingKeys = new SigningKeysApi(configuration);
  }
}
