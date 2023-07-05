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

  /**
   * Id of the advertisement config to use
   * @type {string}
   * @memberof StreamsLiveUpdateRequest
   */
  public adConfigId?: string;

  /**
   * Id of the content protection config to use
   * @type {string}
   * @memberof StreamsLiveUpdateRequest
   */
  public contentProtectionId?: string;

  constructor(obj?: Partial<StreamsLiveUpdateRequest>) {
    if(!obj) {
      return;
    }
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.configId = map(obj.configId);
    this.posterUrl = map(obj.posterUrl);
    this.adConfigId = map(obj.adConfigId);
    this.contentProtectionId = map(obj.contentProtectionId);
  }
}

export default StreamsLiveUpdateRequest;

