import {map, mapArray} from '../common/Mapper';
import StreamsConfigPlayerStyle from './StreamsConfigPlayerStyle';

/**
 * @export
 * @class StreamsConfigResponse
 */
export class StreamsConfigResponse {
  /**
   * The identifier of the stream config
   * @type {string}
   * @memberof StreamsConfigResponse
   */
  public id?: string;

  /**
   * UUID of the associated organization
   * @type {string}
   * @memberof StreamsConfigResponse
   */
  public orgId?: string;

  /**
   * @type {StreamsConfigPlayerStyle}
   * @memberof StreamsConfigResponse
   */
  public playerStyle?: StreamsConfigPlayerStyle;

  /**
   * URL of the watermark image
   * @type {string}
   * @memberof StreamsConfigResponse
   */
  public watermarkUrl?: string;

  /**
   * Target link of the watermark image
   * @type {string}
   * @memberof StreamsConfigResponse
   */
  public watermarkTargetLink?: string;

  constructor(obj?: Partial<StreamsConfigResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.orgId = map(obj.orgId);
    this.playerStyle = map(obj.playerStyle, StreamsConfigPlayerStyle);
    this.watermarkUrl = map(obj.watermarkUrl);
    this.watermarkTargetLink = map(obj.watermarkTargetLink);
  }
}

export default StreamsConfigResponse;

