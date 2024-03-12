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
   * Id of the domain restriction config to use
   * @type {string}
   * @memberof StreamsLiveCreateRequest
   */
  public domainRestrictionId?: string;

  constructor(obj?: Partial<StreamsLiveCreateRequest>) {
    if(!obj) {
      return;
    }
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.domainRestrictionId = map(obj.domainRestrictionId);
  }
}

export default StreamsLiveCreateRequest;

