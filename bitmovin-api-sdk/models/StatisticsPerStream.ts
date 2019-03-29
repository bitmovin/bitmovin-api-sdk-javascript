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
export default class StatisticsPerStream {
  constructor(obj: any) {
    this.streamId = map(obj.streamId);
    this.codecConfigId = map(obj.codecConfigId);
    this.multiplicator = map(obj.multiplicator);
    this.encodedBytes = map(obj.encodedBytes);
    this.encodedSeconds = map(obj.encodedSeconds);
    this.billableMinutes = map(obj.billableMinutes);
    this.width = map(obj.width);
    this.height = map(obj.height);
    this.rate = map(obj.rate);
    this.bitrate = map(obj.bitrate);
    this.codec = map(obj.codec);
    this.resolution = map(obj.resolution);
    this.encodingMode = map(obj.encodingMode);
    this.encodingModeMultiplicator = map(obj.encodingModeMultiplicator);
    this.perTitleResultStream = map(obj.perTitleResultStream);
    this.perTitleMultiplicator = map(obj.perTitleMultiplicator);
    this.psnrMode = map(obj.psnrMode);
    this.psnrMultiplicator = map(obj.psnrMultiplicator);
  }

  /**
   * ID of the stream
   * @type {string}
   * @memberof StatisticsPerStream
   */
  public streamId: string;
  /**
   * ID of the condec configuration
   * @type {string}
   * @memberof StatisticsPerStream
   */
  public codecConfigId: string;
  /**
   * Multiplier for the encoded minutes. Depends on muxing type.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public multiplicator: number;
  /**
   * Encoded bytes.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public encodedBytes: number;
  /**
   * Length of the stream.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public encodedSeconds: number;
  /**
   * Minutes you will be charged for (billableMinutes = encodedSeconds * multiplicator)
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public billableMinutes: number;
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
   * If it' a video stream this value is the FPS, for audio it's the sample rate.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public rate: number;
  /**
   * Bitrate of the stream
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public bitrate: number;
  /**
   * @type {CodecConfigType}
   * @memberof StatisticsPerStream
   */
  public codec: CodecConfigType;
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
}
