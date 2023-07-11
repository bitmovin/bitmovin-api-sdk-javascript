import {map, mapArray} from '../common/Mapper';
import StreamsStyleConfigPlayerStyle from './StreamsStyleConfigPlayerStyle';

/**
 * @export
 * @class StreamsStyleConfigResponse
 */
export class StreamsStyleConfigResponse {
  /**
   * The identifier of the style config
   * @type {string}
   * @memberof StreamsStyleConfigResponse
   */
  public id?: string;

  /**
   * UUID of the associated organization
   * @type {string}
   * @memberof StreamsStyleConfigResponse
   */
  public orgId?: string;

  /**
   * @type {StreamsStyleConfigPlayerStyle}
   * @memberof StreamsStyleConfigResponse
   */
  public playerStyle?: StreamsStyleConfigPlayerStyle;

  /**
   * URL of the watermark image
   * @type {string}
   * @memberof StreamsStyleConfigResponse
   */
  public watermarkUrl?: string;

  /**
   * Target link of the watermark image
   * @type {string}
   * @memberof StreamsStyleConfigResponse
   */
  public watermarkTargetLink?: string;

  constructor(obj?: Partial<StreamsStyleConfigResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.orgId = map(obj.orgId);
    this.playerStyle = map(obj.playerStyle, StreamsStyleConfigPlayerStyle);
    this.watermarkUrl = map(obj.watermarkUrl);
    this.watermarkTargetLink = map(obj.watermarkTargetLink);
  }
}

export default StreamsStyleConfigResponse;

