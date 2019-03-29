import {map} from '../common/Mapper';
import ColorConfig from './ColorConfig';
import EncodingMode from './EncodingMode';
import PixelFormat from './PixelFormat';
import PresetConfiguration from './PresetConfiguration';
import VideoConfiguration from './VideoConfiguration';
import Vp9AqMode from './Vp9AqMode';
import Vp9ArnrType from './Vp9ArnrType';
import Vp9Quality from './Vp9Quality';

/**
 * @export
 * @class Vp9VideoConfiguration
 */
export default class Vp9VideoConfiguration extends VideoConfiguration {
  constructor(obj: any) {
    super(obj);
    this.presetConfiguration = map(obj.presetConfiguration);
    this.crf = map(obj.crf);
    this.lagInFrames = map(obj.lagInFrames);
    this.tileColumns = map(obj.tileColumns);
    this.tileRows = map(obj.tileRows);
    this.frameParallel = map(obj.frameParallel);
    this.maxIntraRate = map(obj.maxIntraRate);
    this.qpMin = map(obj.qpMin);
    this.qpMax = map(obj.qpMax);
    this.rateUndershootPct = map(obj.rateUndershootPct);
    this.rateOvershootPct = map(obj.rateOvershootPct);
    this.noiseSensitivity = map(obj.noiseSensitivity);
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

  /**
   * Use a set of well defined configurations preset to support certain use cases. Can be overwritten with more specific values.
   * @type {PresetConfiguration}
   * @memberof Vp9VideoConfiguration
   */
  public presetConfiguration?: PresetConfiguration;
  /**
   * Sets the constant rate factor for quality-based variable bitrate. Either bitrate or crf is required.
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
   * Number of tile columns to use, log2.
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
   * Sets the minimum of quantization factor.
   * @type {number}
   * @memberof Vp9VideoConfiguration
   */
  public qpMin?: number;
  /**
   * Sets the maximum of quantization factor.
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
   * Enable noise sensitivity on Y channel
   * @type {boolean}
   * @memberof Vp9VideoConfiguration
   */
  public noiseSensitivity?: boolean;
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
}
