import {map, mapArray} from '../common/Mapper';
import StreamsAdConfigResponse from './StreamsAdConfigResponse';
import StreamsContentProtectionResponse from './StreamsContentProtectionResponse';
import StreamsLiveLifeCycle from './StreamsLiveLifeCycle';
import StreamsResponse from './StreamsResponse';
import StreamsStyleConfigResponse from './StreamsStyleConfigResponse';
import StreamsTrimmingStatus from './StreamsTrimmingStatus';
import StreamsType from './StreamsType';

/**
 * @export
 * @class StreamsLiveResponse
 */
export class StreamsLiveResponse extends StreamsResponse {
  /**
   * Discriminator property for StreamsResponse
   * @type {string}
   * @memberof StreamsLiveResponse
   */
  public readonly type: StreamsType = StreamsType.LIVE;

  /**
   * The streamKey of the stream
   * @type {string}
   * @memberof StreamsLiveResponse
   */
  public streamKey?: string;

  /**
   * The life cycle of the stream
   * @type {StreamsLiveLifeCycle}
   * @memberof StreamsLiveResponse
   */
  public lifeCycle?: StreamsLiveLifeCycle;

  /**
   * @type {StreamsStyleConfigResponse}
   * @memberof StreamsLiveResponse
   */
  public styleConfig?: StreamsStyleConfigResponse;

  /**
   * Poster URL
   * @type {string}
   * @memberof StreamsLiveResponse
   */
  public posterUrl?: string;

  /**
   * @type {StreamsAdConfigResponse}
   * @memberof StreamsLiveResponse
   */
  public adConfig?: StreamsAdConfigResponse;

  /**
   * @type {StreamsContentProtectionResponse}
   * @memberof StreamsLiveResponse
   */
  public contentProtection?: StreamsContentProtectionResponse;

  /**
   * Stream trimming information
   * @type {StreamsTrimmingStatus}
   * @memberof StreamsLiveResponse
   */
  public trimming?: StreamsTrimmingStatus;

  constructor(obj?: Partial<StreamsLiveResponse>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.streamKey = map(obj.streamKey);
    this.lifeCycle = map(obj.lifeCycle);
    this.styleConfig = map(obj.styleConfig, StreamsStyleConfigResponse);
    this.posterUrl = map(obj.posterUrl);
    this.adConfig = map(obj.adConfig, StreamsAdConfigResponse);
    this.contentProtection = map(obj.contentProtection, StreamsContentProtectionResponse);
    this.trimming = map(obj.trimming);
  }
}

export default StreamsLiveResponse;

