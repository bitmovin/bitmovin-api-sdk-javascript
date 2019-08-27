import {map} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';
import EncodingMode from './EncodingMode';
import PsnrPerStreamMode from './PsnrPerStreamMode';
import StatisticsPerTitleStream from './StatisticsPerTitleStream';
import StatisticsResolution from './StatisticsResolution';

/**
 * @export
 * @class StatisticsPerStream
 */
export class StatisticsPerStream {
  /**
   * ID of the stream (required)
   * @type {string}
   * @memberof StatisticsPerStream
   */
  public streamId?: string;

  /**
   * ID of the condec configuration (required)
   * @type {string}
   * @memberof StatisticsPerStream
   */
  public codecConfigId?: string;

  /**
   * Multiplier for the encoded minutes. Depends on muxing type. (required)
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public multiplicator?: number;

  /**
   * Encoded bytes. (required)
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public encodedBytes?: number;

  /**
   * Length of the stream. (required)
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public encodedSeconds?: number;

  /**
   * Minutes you will be charged for (billableMinutes = encodedSeconds * multiplicator) (required)
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public billableMinutes?: number;

  /**
   * Video width, only if video stream
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public width?: number;

  /**
   * Video height, only if video stream
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public height?: number;

  /**
   * If it' a video stream this value is the FPS, for audio it's the sample rate. (required)
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public rate?: number;

  /**
   * Bitrate of the stream (required)
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public bitrate?: number;

  /**
   * @type {CodecConfigType}
   * @memberof StatisticsPerStream
   */
  public codec?: CodecConfigType;

  /**
   * @type {StatisticsResolution}
   * @memberof StatisticsPerStream
   */
  public resolution?: StatisticsResolution;

  /**
   * @type {EncodingMode}
   * @memberof StatisticsPerStream
   */
  public encodingMode?: EncodingMode;

  /**
   * The output minutes multiplicator for the given encodingMode
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public encodingModeMultiplicator?: number;

  /**
   * @type {StatisticsPerTitleStream}
   * @memberof StatisticsPerStream
   */
  public perTitleResultStream?: StatisticsPerTitleStream;

  /**
   * The output minutes multiplicator for per-title
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public perTitleMultiplicator?: number;

  /**
   * @type {PsnrPerStreamMode}
   * @memberof StatisticsPerStream
   */
  public psnrMode?: PsnrPerStreamMode;

  /**
   * The output minutes multiplicator for psnr streams
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public psnrMultiplicator?: number;

  constructor(obj: Partial<StatisticsPerStream>) {

    this.streamId = obj.streamId;
    this.codecConfigId = obj.codecConfigId;
    this.multiplicator = obj.multiplicator;
    this.encodedBytes = obj.encodedBytes;
    this.encodedSeconds = obj.encodedSeconds;
    this.billableMinutes = obj.billableMinutes;
    this.width = obj.width;
    this.height = obj.height;
    this.rate = obj.rate;
    this.bitrate = obj.bitrate;
    this.codec = obj.codec;
    this.resolution = obj.resolution;
    this.encodingMode = obj.encodingMode;
    this.encodingModeMultiplicator = obj.encodingModeMultiplicator;
    this.perTitleResultStream = obj.perTitleResultStream;
    this.perTitleMultiplicator = obj.perTitleMultiplicator;
    this.psnrMode = obj.psnrMode;
    this.psnrMultiplicator = obj.psnrMultiplicator;
  }
}

export default StatisticsPerStream;

