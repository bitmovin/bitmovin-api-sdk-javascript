import {map, mapArray} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';
import ColorConfig from './ColorConfig';
import DisplayAspectRatio from './DisplayAspectRatio';
import EncodingMode from './EncodingMode';
import PixelFormat from './PixelFormat';
import PresetConfiguration from './PresetConfiguration';
import VideoConfiguration from './VideoConfiguration';
import Vp9AqMode from './Vp9AqMode';
import Vp9ArnrType from './Vp9ArnrType';
import Vp9DynamicRangeFormat from './Vp9DynamicRangeFormat';
import Vp9Quality from './Vp9Quality';

/**
 * @export
 * @class Vp9VideoConfiguration
 */
export class Vp9VideoConfiguration extends VideoConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof Vp9VideoConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.VP9;

  /**
   * Choose from a set of preset configurations tailored for common use cases. Check out [VP9 Presets](https://bitmovin.com/docs/encoding/tutorials/vp9-presets) to see which values get applied by each preset. Explicitly setting a property to a different value will override the preset's value for that property.
   * @type {PresetConfiguration}
   * @memberof Vp9VideoConfiguration
   */
  public presetConfiguration?: PresetConfiguration;

  /**
   * Automatically configures the VP9 Video Codec to be compatible with the given SDR/HLG format. Bitmovin recommends to use the dynamic range format together with a preset configuration to achieve good results. Explicitly configured properties will take precedence over dynamic range format settings, which in turn will take precedence over preset configurations.
   * @type {Vp9DynamicRangeFormat}
   * @memberof Vp9VideoConfiguration
   */
  public dynamicRangeFormat?: Vp9DynamicRangeFormat;

  /**
   * Constant rate factor for quality-based variable bitrate. Either bitrate or crf is required.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public crf?: number;

  /**
   * Number of frames to look ahead for alternate reference frame selection.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public lagInFrames?: number;

  /**
   * Enables error resiliency feature
   * @type {boolean}
   * @memberof Vp9VideoConfiguration
   */
  public errorResiliencyEnabled?: boolean;

  /**
   * Number of tile columns to use, log2. Depending on the encoding width there are limitations on this value. The minimum values are 2 for width >= 1920 and 1 for width >= 1280. The minimum width of each tile is 256 pixels so the maximum values are 0 for width < 256, 1 for width < 512, 2 for width < 1024, 3 for width < 2048, 4 for width < 4096, 5 for width < 8192. If the value is too high or too low it will be overridden.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public tileColumns?: number;

  /**
   * Number of tile rows to use, log2.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public tileRows?: number;

  /**
   * Enable frame parallel decodability features
   * @type {boolean}
   * @memberof Vp9VideoConfiguration
   */
  public frameParallel?: boolean;

  /**
   * Maximum I-frame bitrate (percentage) 0=unlimited
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public maxIntraRate?: number;

  /**
   * Minimum quantization factor.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public qpMin?: number;

  /**
   * Maximum quantization factor.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public qpMax?: number;

  /**
   * Datarate undershoot (min) target (percentage).
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public rateUndershootPct?: number;

  /**
   * Datarate overshoot (max) target (percentage).
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public rateOvershootPct?: number;

  /**
   * Client buffer size (ms)
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public clientBufferSize?: number;

  /**
   * Client initial buffer size (ms)
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public clientInitialBufferSize?: number;

  /**
   * CBR/VBR bias (0=CBR, 100=VBR)
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public biasPct?: number;

  /**
   * Enable noise sensitivity on Y channel
   * @type {boolean}
   * @memberof Vp9VideoConfiguration
   */
  public noiseSensitivity?: boolean;

  /**
   * Controls the tradeoff between compression efficiency and encoding speed. Higher values indicate a faster encoding. The minimum value for width * height >= 1280 * 720 is 2. If the value is too low it will be overridden.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public cpuUsed?: number;

  /**
   * Enable automatic alternate reference frames (2pass only)
   * @type {boolean}
   * @memberof Vp9VideoConfiguration
   */
  public automaticAltRefFramesEnabled?: boolean;

  /**
   * Target level (255: off, 0: only keep level stats; 10: level 1.0; 11: level 1.1; ... 62: level 6.2)
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public targetLevel?: number;

  /**
   * Enable row based non-deterministic multi-threading
   * @type {boolean}
   * @memberof Vp9VideoConfiguration
   */
  public rowMultiThreadingEnabled?: boolean;

  /**
   * Loop filter sharpness.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public sharpness?: number;

  /**
   * Minimum GOP length, the minimum distance between I-frames.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public minGop?: number;

  /**
   * Maximum GOP length, the maximum distance between I-frames
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public maxGop?: number;

  /**
   * Minimum interval in seconds between key frames
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public minKeyframeInterval?: number;

  /**
   * Maximum interval in seconds between key frames
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public maxKeyframeInterval?: number;

  /**
   * @type {Vp9Quality}
   * @memberof Vp9VideoConfiguration
   */
  public quality?: Vp9Quality;

  /**
   * Lossless mode
   * @type {boolean}
   * @memberof Vp9VideoConfiguration
   */
  public lossless?: boolean;

  /**
   * A change threshold on blocks below which they will be skipped by the encoder.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public staticThresh?: number;

  /**
   * @type {Vp9AqMode}
   * @memberof Vp9VideoConfiguration
   */
  public aqMode?: Vp9AqMode;

  /**
   * altref noise reduction max frame count.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public arnrMaxFrames?: number;

  /**
   * altref noise reduction filter strength.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public arnrStrength?: number;

  /**
   * @type {Vp9ArnrType}
   * @memberof Vp9VideoConfiguration
   */
  public arnrType?: Vp9ArnrType;

  constructor(obj?: Partial<Vp9VideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.presetConfiguration = map(obj.presetConfiguration);
    this.dynamicRangeFormat = map(obj.dynamicRangeFormat);
    this.crf = map(obj.crf);
    this.lagInFrames = map(obj.lagInFrames);
    this.errorResiliencyEnabled = map(obj.errorResiliencyEnabled);
    this.tileColumns = map(obj.tileColumns);
    this.tileRows = map(obj.tileRows);
    this.frameParallel = map(obj.frameParallel);
    this.maxIntraRate = map(obj.maxIntraRate);
    this.qpMin = map(obj.qpMin);
    this.qpMax = map(obj.qpMax);
    this.rateUndershootPct = map(obj.rateUndershootPct);
    this.rateOvershootPct = map(obj.rateOvershootPct);
    this.clientBufferSize = map(obj.clientBufferSize);
    this.clientInitialBufferSize = map(obj.clientInitialBufferSize);
    this.biasPct = map(obj.biasPct);
    this.noiseSensitivity = map(obj.noiseSensitivity);
    this.cpuUsed = map(obj.cpuUsed);
    this.automaticAltRefFramesEnabled = map(obj.automaticAltRefFramesEnabled);
    this.targetLevel = map(obj.targetLevel);
    this.rowMultiThreadingEnabled = map(obj.rowMultiThreadingEnabled);
    this.sharpness = map(obj.sharpness);
    this.minGop = map(obj.minGop);
    this.maxGop = map(obj.maxGop);
    this.minKeyframeInterval = map(obj.minKeyframeInterval);
    this.maxKeyframeInterval = map(obj.maxKeyframeInterval);
    this.quality = map(obj.quality);
    this.lossless = map(obj.lossless);
    this.staticThresh = map(obj.staticThresh);
    this.aqMode = map(obj.aqMode);
    this.arnrMaxFrames = map(obj.arnrMaxFrames);
    this.arnrStrength = map(obj.arnrStrength);
    this.arnrType = map(obj.arnrType);
  }
}

export default Vp9VideoConfiguration;

