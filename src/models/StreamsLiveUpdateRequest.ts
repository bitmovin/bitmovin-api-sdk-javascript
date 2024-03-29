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
   * URL to hosted poster image
   * @type {string}
   * @memberof StreamsLiveUpdateRequest
   */
  public posterUrl?: string;

  /**
   * Id of the domain restriction config to use
   * @type {string}
   * @memberof StreamsLiveUpdateRequest
   */
  public domainRestrictionId?: string;

  constructor(obj?: Partial<StreamsLiveUpdateRequest>) {
    if(!obj) {
      return;
    }
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.posterUrl = map(obj.posterUrl);
    this.domainRestrictionId = map(obj.domainRestrictionId);
  }
}

export default StreamsLiveUpdateRequest;

