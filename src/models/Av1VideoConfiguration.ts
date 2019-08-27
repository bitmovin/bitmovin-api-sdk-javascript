import {map} from '../common/Mapper';
import Av1AdaptiveQuantMode from './Av1AdaptiveQuantMode';
import Av1KeyPlacementMode from './Av1KeyPlacementMode';
import ColorConfig from './ColorConfig';
import EncodingMode from './EncodingMode';
import PixelFormat from './PixelFormat';
import VideoConfiguration from './VideoConfiguration';

/**
 * @export
 * @class Av1VideoConfiguration
 */
export class Av1VideoConfiguration extends VideoConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof Av1VideoConfiguration
   */
  public type: 'AV1' = 'AV1';

  /**
   * @type {Av1KeyPlacementMode}
   * @memberof Av1VideoConfiguration
   */
  public keyPlacementMode?: Av1KeyPlacementMode;

  /**
   * @type {Av1AdaptiveQuantMode}
   * @memberof Av1VideoConfiguration
   */
  public adaptiveQuantMode?: Av1AdaptiveQuantMode;

  /**
   * Number of frames to look ahead for alternate reference frame selection
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public lagInFrames?: number;

  /**
   * Minimum (best quality) quantizer
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public minQ?: number;

  /**
   * Maximum (worst quality) quantizer
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public maxQ?: number;

  /**
   * Rate control adaptation undershoot control
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public undershootPct?: number;

  /**
   * Rate control adaptation overshoot control
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public overshootPct?: number;

  /**
   * Decoder buffer size in milliseconds
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public clientBufferSize?: number;

  /**
   * Decoder buffer initial size in milliseconds
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public clientInitialBufferSize?: number;

  /**
   * Decoder buffer optimal size in milliseconds
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public clientOptimalBufferSize?: number;

  /**
   * Number of tile columns to use, log2
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public tileColumns?: number;

  /**
   * Number of tile rows to use, log2
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public tileRows?: number;

  /**
   * Enable automatic set and use alf frames
   * @type {boolean}
   * @memberof Av1VideoConfiguration
   */
  public isAutomaticAltRefFramesEnabled?: boolean;

  /**
   * The max number of frames to create arf
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public arnrMaxFrames?: number;

  /**
   * The filter strength for the arf
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public arnrStrength?: number;

  /**
   * Maximum data rate for intra frames, expressed as a percentage of the average per-frame bitrate. Default value 0 meaning unlimited
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public maxIntraRate?: number;

  /**
   * Lossless encoding mode
   * @type {boolean}
   * @memberof Av1VideoConfiguration
   */
  public isLossless?: boolean;

  /**
   * Enable frame parallel decoding feature
   * @type {boolean}
   * @memberof Av1VideoConfiguration
   */
  public isFrameParallel?: boolean;

  /**
   * Sets the sharpness
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public sharpness?: number;

  /**
   * Enable quality boost by lowering frame level Q periodically
   * @type {boolean}
   * @memberof Av1VideoConfiguration
   */
  public isFrameBoostEnabled?: boolean;

  /**
   * Enable noise sensitivity on Y channel
   * @type {boolean}
   * @memberof Av1VideoConfiguration
   */
  public noiseSensitivity?: boolean;

  /**
   * Minimum interval between GF/ARF frames
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public minGfInterval?: number;

  /**
   * Maximum interval between GF/ARF frames
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public maxGfInterval?: number;

  /**
   * Maximum number of tile groups
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public numTileGroups?: number;

  /**
   * Maximum number of bytes in a tile group
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public mtuSize?: number;

  constructor(obj: Partial<Av1VideoConfiguration>) {
    super(obj);

    this.keyPlacementMode = obj.keyPlacementMode;
    this.adaptiveQuantMode = obj.adaptiveQuantMode;
    this.lagInFrames = obj.lagInFrames;
    this.minQ = obj.minQ;
    this.maxQ = obj.maxQ;
    this.undershootPct = obj.undershootPct;
    this.overshootPct = obj.overshootPct;
    this.clientBufferSize = obj.clientBufferSize;
    this.clientInitialBufferSize = obj.clientInitialBufferSize;
    this.clientOptimalBufferSize = obj.clientOptimalBufferSize;
    this.tileColumns = obj.tileColumns;
    this.tileRows = obj.tileRows;
    this.isAutomaticAltRefFramesEnabled = obj.isAutomaticAltRefFramesEnabled;
    this.arnrMaxFrames = obj.arnrMaxFrames;
    this.arnrStrength = obj.arnrStrength;
    this.maxIntraRate = obj.maxIntraRate;
    this.isLossless = obj.isLossless;
    this.isFrameParallel = obj.isFrameParallel;
    this.sharpness = obj.sharpness;
    this.isFrameBoostEnabled = obj.isFrameBoostEnabled;
    this.noiseSensitivity = obj.noiseSensitivity;
    this.minGfInterval = obj.minGfInterval;
    this.maxGfInterval = obj.maxGfInterval;
    this.numTileGroups = obj.numTileGroups;
    this.mtuSize = obj.mtuSize;
  }
}

export default Av1VideoConfiguration;

