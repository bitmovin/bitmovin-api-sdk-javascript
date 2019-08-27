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
export class Vp9VideoConfiguration extends VideoConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof Vp9VideoConfiguration
   */
  public type: 'VP9' = 'VP9';

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
   * Enables error resiliency feature
   * @type {boolean}
   * @memberof Vp9VideoConfiguration
   */
  public errorResiliencyEnabled?: boolean;

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
   * Controls the tradeoff between compression efficiency and encoding speed. Higher values indicate a faster encoding.
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

  constructor(obj: Partial<Vp9VideoConfiguration>) {
    super(obj);

    this.presetConfiguration = obj.presetConfiguration;
    this.crf = obj.crf;
    this.lagInFrames = obj.lagInFrames;
    this.errorResiliencyEnabled = obj.errorResiliencyEnabled;
    this.tileColumns = obj.tileColumns;
    this.tileRows = obj.tileRows;
    this.frameParallel = obj.frameParallel;
    this.maxIntraRate = obj.maxIntraRate;
    this.qpMin = obj.qpMin;
    this.qpMax = obj.qpMax;
    this.rateUndershootPct = obj.rateUndershootPct;
    this.rateOvershootPct = obj.rateOvershootPct;
    this.clientBufferSize = obj.clientBufferSize;
    this.clientInitialBufferSize = obj.clientInitialBufferSize;
    this.biasPct = obj.biasPct;
    this.noiseSensitivity = obj.noiseSensitivity;
    this.cpuUsed = obj.cpuUsed;
    this.automaticAltRefFramesEnabled = obj.automaticAltRefFramesEnabled;
    this.targetLevel = obj.targetLevel;
    this.rowMultiThreadingEnabled = obj.rowMultiThreadingEnabled;
    this.sharpness = obj.sharpness;
    this.minGop = obj.minGop;
    this.maxGop = obj.maxGop;
    this.minKeyframeInterval = obj.minKeyframeInterval;
    this.maxKeyframeInterval = obj.maxKeyframeInterval;
    this.quality = obj.quality;
    this.lossless = obj.lossless;
    this.staticThresh = obj.staticThresh;
    this.aqMode = obj.aqMode;
    this.arnrMaxFrames = obj.arnrMaxFrames;
    this.arnrStrength = obj.arnrStrength;
    this.arnrType = obj.arnrType;
  }
}

export default Vp9VideoConfiguration;

