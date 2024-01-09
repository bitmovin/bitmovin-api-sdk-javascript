import {map, mapArray} from '../common/Mapper';
import StreamsAdConfigResponse from './StreamsAdConfigResponse';
import StreamsContentProtectionResponse from './StreamsContentProtectionResponse';
import StreamsResponse from './StreamsResponse';
import StreamsStyleConfigResponse from './StreamsStyleConfigResponse';
import StreamsTrimmingStatus from './StreamsTrimmingStatus';
import StreamsType from './StreamsType';
import StreamsVideoEncodingTask from './StreamsVideoEncodingTask';
import StreamsVideoStatus from './StreamsVideoStatus';

/**
 * @export
 * @class StreamsVideoResponse
 */
export class StreamsVideoResponse extends StreamsResponse {
  /**
   * Discriminator property for StreamsResponse
   * @type {string}
   * @memberof StreamsVideoResponse
   */
  public readonly type: StreamsType = StreamsType.VIDEO;

  /**
   * The asset URL of the stream
   * @type {string}
   * @memberof StreamsVideoResponse
   */
  public assetUrl?: string;

  /**
   * The status of the stream
   * @type {StreamsVideoStatus}
   * @memberof StreamsVideoResponse
   */
  public status?: StreamsVideoStatus;

  /**
   * @type {StreamsStyleConfigResponse}
   * @memberof StreamsVideoResponse
   */
  public styleConfig?: StreamsStyleConfigResponse;

  /**
   * List of encoding status information
   * @type {StreamsVideoEncodingTask[]}
   * @memberof StreamsVideoResponse
   */
  public encodingTasks?: StreamsVideoEncodingTask[];

  /**
   * Poster URL
   * @type {string}
   * @memberof StreamsVideoResponse
   */
  public posterUrl?: string;

  /**
   * @type {StreamsAdConfigResponse}
   * @memberof StreamsVideoResponse
   */
  public adConfig?: StreamsAdConfigResponse;

  /**
   * @type {StreamsContentProtectionResponse}
   * @memberof StreamsVideoResponse
   */
  public contentProtection?: StreamsContentProtectionResponse;

  /**
   * Stream trimming information
   * @type {StreamsTrimmingStatus}
   * @memberof StreamsVideoResponse
   */
  public trimming?: StreamsTrimmingStatus;

  /**
   * Single-file download URL of the unaltered video in the best available quality
   * @type {string}
   * @memberof StreamsVideoResponse
   */
  public downloadUrl?: string;

  /**
   * True if the stream is signature protected
   * @type {boolean}
   * @memberof StreamsVideoResponse
   */
  public signed?: boolean;

  constructor(obj?: Partial<StreamsVideoResponse>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.assetUrl = map(obj.assetUrl);
    this.status = map(obj.status);
    this.styleConfig = map(obj.styleConfig, StreamsStyleConfigResponse);
    this.encodingTasks = mapArray(obj.encodingTasks, StreamsVideoEncodingTask);
    this.posterUrl = map(obj.posterUrl);
    this.adConfig = map(obj.adConfig, StreamsAdConfigResponse);
    this.contentProtection = map(obj.contentProtection, StreamsContentProtectionResponse);
    this.trimming = map(obj.trimming);
    this.downloadUrl = map(obj.downloadUrl);
    this.signed = map(obj.signed);
  }
}

export default StreamsVideoResponse;

