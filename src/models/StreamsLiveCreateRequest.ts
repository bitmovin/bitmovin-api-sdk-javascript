import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsLiveCreateRequest
 */
export class StreamsLiveCreateRequest {
  /**
   * Title of the stream
   * @type {string}
   * @memberof StreamsLiveCreateRequest
   */
  public title?: string;

  /**
   * Description of the stream
   * @type {string}
   * @memberof StreamsLiveCreateRequest
   */
  public description?: string;

  /**
   * Id of the stream config to use
   * @type {string}
   * @memberof StreamsLiveCreateRequest
   */
  public configId?: string;

  /**
   * Id of the advertisement config to use
   * @type {string}
   * @memberof StreamsLiveCreateRequest
   */
  public adConfigId?: string;

  constructor(obj?: Partial<StreamsLiveCreateRequest>) {
    if(!obj) {
      return;
    }
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.configId = map(obj.configId);
    this.adConfigId = map(obj.adConfigId);
  }
}

export default StreamsLiveCreateRequest;

