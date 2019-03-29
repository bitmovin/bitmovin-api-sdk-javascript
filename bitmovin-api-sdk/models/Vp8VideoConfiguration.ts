import {map} from '../common/Mapper';
import ColorConfig from './ColorConfig';
import EncodingMode from './EncodingMode';
import PixelFormat from './PixelFormat';
import VideoConfiguration from './VideoConfiguration';
import Vp8ArnrType from './Vp8ArnrType';
import Vp8NoiseSensitivity from './Vp8NoiseSensitivity';
import Vp8Quality from './Vp8Quality';

/**
 * @export
 * @class Vp8VideoConfiguration
 */
export default class Vp8VideoConfiguration extends VideoConfiguration {
  constructor(obj: any) {
    super(obj);
    this.crf = map(obj.crf);
    this.lagInFrames = map(obj.lagInFrames);
    this.maxIntraRate = map(obj.maxIntraRate);
    this.qpMin = map(obj.qpMin);
    this.qpMax = map(obj.qpMax);
    this.rateUndershootPct = map(obj.rateUndershootPct);
    this.rateOvershootPct = map(obj.rateOvershootPct);
    this.cpuUsed = map(obj.cpuUsed);
    this.noiseSensitivity = map(obj.noiseSensitivity);
    this.sharpness = map(obj.sharpness);
    this.minGop = map(obj.minGop);
    this.maxGop = map(obj.maxGop);
    this.minKeyframeInterval = map(obj.minKeyframeInterval);
    this.maxKeyframeInterval = map(obj.maxKeyframeInterval);
    this.quality = map(obj.quality);
    this.staticThresh = map(obj.staticThresh);
    this.arnrMaxFrames = map(obj.arnrMaxFrames);
    this.arnrStrength = map(obj.arnrStrength);
    this.arnrType = map(obj.arnrType);
  }

  /**
   * Sets the constant rate factor for quality-based variable bitrate. Either bitrate or crf is required.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public crf?: number;
  /**
   * Number of frames to look ahead for alternate reference frame selection.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public lagInFrames?: number;
  /**
   * Maximum I-frame bitrate (percentage) 0=unlimited
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public maxIntraRate?: number;
  /**
   * Sets the minimum of quantization factor.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public qpMin?: number;
  /**
   * Sets the maximum of quantization factor.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public qpMax?: number;
  /**
   * Datarate undershoot (min) target (percentage).
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public rateUndershootPct?: number;
  /**
   * Datarate overshoot (max) target (percentage).
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public rateOvershootPct?: number;
  /**
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public cpuUsed?: number;
  /**
   * @type {Vp8NoiseSensitivity}
   * @memberof Vp8VideoConfiguration
   */
  public noiseSensitivity?: Vp8NoiseSensitivity;
  /**
   * Loop filter sharpness.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public sharpness?: number;
  /**
   * Minimum GOP length, the minimum distance between I-frames.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public minGop?: number;
  /**
   * Maximum GOP length, the maximum distance between I-frames
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public maxGop?: number;
  /**
   * Minimum interval in seconds between key frames
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public minKeyframeInterval?: number;
  /**
   * Maximum interval in seconds between key frames
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public maxKeyframeInterval?: number;
  /**
   * @type {Vp8Quality}
   * @memberof Vp8VideoConfiguration
   */
  public quality?: Vp8Quality;
  /**
   * A change threshold on blocks below which they will be skipped by the encoder.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public staticThresh?: number;
  /**
   * altref noise reduction max frame count.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public arnrMaxFrames?: number;
  /**
   * altref noise reduction filter strength.
   * @type {number}
   * @memberof Vp8VideoConfiguration
   */
  public arnrStrength?: number;
  /**
   * @type {Vp8ArnrType}
   * @memberof Vp8VideoConfiguration
   */
  public arnrType?: Vp8ArnrType;
}
