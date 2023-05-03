import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsLiveUpdateRequest
 */
export class StreamsLiveUpdateRequest {
  /**
   * The new title of the stream
   * @type {string}
   * @memberof StreamsLiveUpdateRequest
   */
  public title?: string;

  /**
   * The new description of the stream
   * @type {string}
   * @memberof StreamsLiveUpdateRequest
   */
  public description?: string;

  /**
   * Id of the stream config to use
   * @type {string}
   * @memberof StreamsLiveUpdateRequest
   */
  public configId?: string;

  /**
   * URL to hosted poster image
   * @type {string}
   * @memberof StreamsLiveUpdateRequest
   */
  public posterUrl?: string;

  constructor(obj?: Partial<StreamsLiveUpdateRequest>) {
    if(!obj) {
      return;
    }
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.configId = map(obj.configId);
    this.posterUrl = map(obj.posterUrl);
  }
}

export default StreamsLiveUpdateRequest;

