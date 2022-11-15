import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import VideoApi from './video/VideoApi';

/**
 * StreamsApi - object-oriented interface
 * @export
 * @class StreamsApi
 * @extends {BaseAPI}
 */
export default class StreamsApi extends BaseAPI {
  public video: VideoApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.video = new VideoApi(configuration);
  }
}
