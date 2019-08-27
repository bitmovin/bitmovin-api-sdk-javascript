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
  public id?: number;

  /**
   * The media type of the stream (required)
   * @type {MediaType}
   * @memberof StreamInfosDetails
   */
  public mediaType?: MediaType;

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
  public rate?: number;

  /**
   * The codec of the input stream (required)
   * @type {LiveEncodingCodec}
   * @memberof StreamInfosDetails
   */
  public codec?: LiveEncodingCodec;

  /**
   * The minimum samples read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesReadPerSecondMin?: number;

  /**
   * The maximum samples read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesReadPerSecondMax?: number;

  /**
   * The average samples read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesReadPerSecondAvg?: number;

  /**
   * The minimum amount of backup samples used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesBackupPerSecondMin?: number;

  /**
   * The maximum amount of backup samples used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesBackupPerSecondMax?: number;

  /**
   * The average amount of backup samples used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public samplesBackupPerSecondAvg?: number;

  /**
   * The minimum bytes read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesReadPerSecondMin?: number;

  /**
   * The maximum bytes read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesReadPerSecondMax?: number;

  /**
   * The average bytes read per second within the last minute (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesReadPerSecondAvg?: number;

  /**
   * The minimum amount of backup bytes used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesBackupPerSecondMin?: number;

  /**
   * The maximum amount of backup bytes used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesBackupPerSecondMax?: number;

  /**
   * The average amount of backup bytes used per second within the last minute. This will be written when no live stream is ingested. The last picture will be repeated with silent audio. (required)
   * @type {number}
   * @memberof StreamInfosDetails
   */
  public bytesBackupPerSecondAvg?: number;

  constructor(obj: Partial<StreamInfosDetails>) {

    this.id = obj.id;
    this.mediaType = obj.mediaType;
    this.width = obj.width;
    this.height = obj.height;
    this.rate = obj.rate;
    this.codec = obj.codec;
    this.samplesReadPerSecondMin = obj.samplesReadPerSecondMin;
    this.samplesReadPerSecondMax = obj.samplesReadPerSecondMax;
    this.samplesReadPerSecondAvg = obj.samplesReadPerSecondAvg;
    this.samplesBackupPerSecondMin = obj.samplesBackupPerSecondMin;
    this.samplesBackupPerSecondMax = obj.samplesBackupPerSecondMax;
    this.samplesBackupPerSecondAvg = obj.samplesBackupPerSecondAvg;
    this.bytesReadPerSecondMin = obj.bytesReadPerSecondMin;
    this.bytesReadPerSecondMax = obj.bytesReadPerSecondMax;
    this.bytesReadPerSecondAvg = obj.bytesReadPerSecondAvg;
    this.bytesBackupPerSecondMin = obj.bytesBackupPerSecondMin;
    this.bytesBackupPerSecondMax = obj.bytesBackupPerSecondMax;
    this.bytesBackupPerSecondAvg = obj.bytesBackupPerSecondAvg;
  }
}

export default StreamInfosDetails;

