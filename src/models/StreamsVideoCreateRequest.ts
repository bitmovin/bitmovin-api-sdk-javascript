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
   * Id of the style config to use
   * @type {string}
   * @memberof StreamsVideoCreateRequest
   */
  public styleConfigId?: string;

  /**
   * Id of the advertisement config to use
   * @type {string}
   * @memberof StreamsVideoCreateRequest
   */
  public adConfigId?: string;

  constructor(obj?: Partial<StreamsVideoCreateRequest>) {
    if(!obj) {
      return;
    }
    this.assetUrl = map(obj.assetUrl);
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.styleConfigId = map(obj.styleConfigId);
    this.adConfigId = map(obj.adConfigId);
  }
}

export default StreamsVideoCreateRequest;

