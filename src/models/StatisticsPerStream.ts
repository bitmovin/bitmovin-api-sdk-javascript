import {map, mapArray} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';
import DolbyVisionPerStreamMode from './DolbyVisionPerStreamMode';
import EncodingMode from './EncodingMode';
import InputFactor from './InputFactor';
import NexGuardABWatermarkingFeature from './NexGuardABWatermarkingFeature';
import PixelFormatBitDepth from './PixelFormatBitDepth';
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

  /**
   * @type {DolbyVisionPerStreamMode}
   * @memberof StatisticsPerStream
   */
  public dolbyVisionMode?: DolbyVisionPerStreamMode;

  /**
   * The output minutes multiplicator for Dolby Vision streams
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public dolbyVisionMultiplicator?: number;

  /**
   * Name of the preset configuration used for the codec configuration or \"CUSTOM\" if any preset values were overridden
   * @type {string}
   * @memberof StatisticsPerStream
   */
  public preset?: string;

  /**
   * The output minutes multiplicator for the used codec configuration preset.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public presetMultiplicator?: number;

  /**
   * Indicates if the stream was part of a live encoding.
   * @type {boolean}
   * @memberof StatisticsPerStream
   */
  public live?: boolean;

  /**
   * The output minutes multiplicator for live streams.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public liveMultiplicator?: number;

  /**
   * Indicates if an enhanced interlace filter was used.
   * @type {boolean}
   * @memberof StatisticsPerStream
   */
  public enhancedDeinterlace?: boolean;

  /**
   * The output minutes multiplicator for streams using an enhanced Deinterlace Filter.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public enhancedDeinterlaceMultiplicator?: number;

  /**
   * Indicates if the conversion from Dolby Vision to HDR was triggered.
   * @type {boolean}
   * @memberof StatisticsPerStream
   */
  public dolbyVisionToHdr?: boolean;

  /**
   * The output minutes multiplicator for streams using the conversion from Dolby Vision to HDR.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public dolbyVisionToHdrMultiplicator?: number;

  /**
   * Indicates if the conversion from Dolby Vision to SDR was triggered.
   * @type {boolean}
   * @memberof StatisticsPerStream
   */
  public dolbyVisionToSdr?: boolean;

  /**
   * The output minutes multiplicator for streams using the conversion from Dolby Vision to SDR.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public dolbyVisionToSdrMultiplicator?: number;

  /**
   * Indicates if the conversion from HDR10/HLG to SDR was triggered.
   * @type {boolean}
   * @memberof StatisticsPerStream
   */
  public hdrHlgToSdr?: boolean;

  /**
   * The output minutes multiplicator for streams using the conversion from HDR10/HLG to SDR.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public hdrHlgToSdrMultiplicator?: number;

  /**
   * @type {NexGuardABWatermarkingFeature}
   * @memberof StatisticsPerStream
   */
  public nexGuardABWatermarkingType?: NexGuardABWatermarkingFeature;

  /**
   * The output minutes multiplicator for streams using a NexGuard A/B Watermarking.
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public nexGuardABWatermarkingMultiplicator?: number;

  /**
   * @type {PixelFormatBitDepth}
   * @memberof StatisticsPerStream
   */
  public pixelFormatBitDepth?: PixelFormatBitDepth;

  /**
   * The output minutes multiplicator for the pixel format bit depth
   * @type {number}
   * @memberof StatisticsPerStream
   */
  public pixelFormatMultiplicator?: number;

  /**
   * @type {InputFactor}
   * @memberof StatisticsPerStream
   */
  public inputFactor?: InputFactor;

  constructor(obj?: Partial<StatisticsPerStream>) {
    if(!obj) {
      return;
    }
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
    this.dolbyVisionMode = map(obj.dolbyVisionMode);
    this.dolbyVisionMultiplicator = map(obj.dolbyVisionMultiplicator);
    this.preset = map(obj.preset);
    this.presetMultiplicator = map(obj.presetMultiplicator);
    this.live = map(obj.live);
    this.liveMultiplicator = map(obj.liveMultiplicator);
    this.enhancedDeinterlace = map(obj.enhancedDeinterlace);
    this.enhancedDeinterlaceMultiplicator = map(obj.enhancedDeinterlaceMultiplicator);
    this.dolbyVisionToHdr = map(obj.dolbyVisionToHdr);
    this.dolbyVisionToHdrMultiplicator = map(obj.dolbyVisionToHdrMultiplicator);
    this.dolbyVisionToSdr = map(obj.dolbyVisionToSdr);
    this.dolbyVisionToSdrMultiplicator = map(obj.dolbyVisionToSdrMultiplicator);
    this.hdrHlgToSdr = map(obj.hdrHlgToSdr);
    this.hdrHlgToSdrMultiplicator = map(obj.hdrHlgToSdrMultiplicator);
    this.nexGuardABWatermarkingType = map(obj.nexGuardABWatermarkingType);
    this.nexGuardABWatermarkingMultiplicator = map(obj.nexGuardABWatermarkingMultiplicator);
    this.pixelFormatBitDepth = map(obj.pixelFormatBitDepth);
    this.pixelFormatMultiplicator = map(obj.pixelFormatMultiplicator);
    this.inputFactor = map(obj.inputFactor, InputFactor);
  }
}

export default StatisticsPerStream;

