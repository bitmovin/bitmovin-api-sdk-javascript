import {map} from '../common/Mapper';
import LiveEncodingCodec from './LiveEncodingCodec';
import MediaType from './MediaType';

/**
 * @export
 * @class StreamInfosDetails
 */
export class StreamInfosDetails {
  /**
   * The id of the stream (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public id: number;

  /**
   * The media type of the stream (required)
   * @type {MediaType}
   * @memberof StreamInfosDetails
   */
  public mediaType: MediaType;

  /**
   * The width of the stream, if it is a video stream
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public width?: number;

  /**
   * The height of the stream, if it is a video stream
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public height?: number;

  /**
   * The rate (sample rate / fps) of the stream (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public rate: number;

  /**
   * The codec of the input stream (required)
   * @type {LiveEncodingCodec}
   * @memberof StreamInfosDetails
   */
  public codec: LiveEncodingCodec;

  /**
   * The minimum samples read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesReadPerSecondMin: number;

  /**
   * The maximum samples read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesReadPerSecondMax: number;

  /**
   * The average samples read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesReadPerSecondAvg: number;

  /**
   * The minimum amount of backup samples used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesBackupPerSecondMin: number;

  /**
   * The maximum amount of backup samples used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesBackupPerSecondMax: number;

  /**
   * The average amount of backup samples used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesBackupPerSecondAvg: number;

  /**
   * The minimum bytes read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesReadPerSecondMin: number;

  /**
   * The maximum bytes read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesReadPerSecondMax: number;

  /**
   * The average bytes read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesReadPerSecondAvg: number;

  /**
   * The minimum amount of backup bytes used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesBackupPerSecondMin: number;

  /**
   * The maximum amount of backup bytes used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesBackupPerSecondMax: number;

  /**
   * The average amount of backup bytes used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesBackupPerSecondAvg: number;

  constructor(obj: Partial<StreamInfosDetails>) {
    this.id = map(obj.id);
    this.mediaType = map(obj.mediaType);
    this.width = map(obj.width);
    this.height = map(obj.height);
    this.rate = map(obj.rate);
    this.codec = map(obj.codec);
    this.samplesReadPerSecondMin = map(obj.samplesReadPerSecondMin);
    this.samplesReadPerSecondMax = map(obj.samplesReadPerSecondMax);
    this.samplesReadPerSecondAvg = map(obj.samplesReadPerSecondAvg);
    this.samplesBackupPerSecondMin = map(obj.samplesBackupPerSecondMin);
    this.samplesBackupPerSecondMax = map(obj.samplesBackupPerSecondMax);
    this.samplesBackupPerSecondAvg = map(obj.samplesBackupPerSecondAvg);
    this.bytesReadPerSecondMin = map(obj.bytesReadPerSecondMin);
    this.bytesReadPerSecondMax = map(obj.bytesReadPerSecondMax);
    this.bytesReadPerSecondAvg = map(obj.bytesReadPerSecondAvg);
    this.bytesBackupPerSecondMin = map(obj.bytesBackupPerSecondMin);
    this.bytesBackupPerSecondMax = map(obj.bytesBackupPerSecondMax);
    this.bytesBackupPerSecondAvg = map(obj.bytesBackupPerSecondAvg);
  }
}

export default StreamInfosDetails;

