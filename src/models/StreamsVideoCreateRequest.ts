import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsVideoCreateRequest
 */
export class StreamsVideoCreateRequest {
  /**
   * The streams input asset URL
   * @type {string}
   * @memberof StreamsVideoCreateRequest
   */
  public assetUrl?: string;

  /**
   * Title of the stream
   * @type {string}
   * @memberof StreamsVideoCreateRequest
   */
  public title?: string;

  /**
   * Description of the stream
   * @type {string}
   * @memberof StreamsVideoCreateRequest
   */
  public description?: string;

  /**
   * Id of the stream config to use
   * @type {string}
   * @memberof StreamsVideoCreateRequest
   */
  public configId?: string;

  constructor(obj?: Partial<StreamsVideoCreateRequest>) {
    if(!obj) {
      return;
    }
    this.assetUrl = map(obj.assetUrl);
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.configId = map(obj.configId);
  }
}

export default StreamsVideoCreateRequest;
