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
  constructor(obj: any) {
    super(obj);
    this.keyPlacementMode = map(obj.keyPlacementMode);
    this.adaptiveQuantMode = map(obj.adaptiveQuantMode);
    this.lagInFrames = map(obj.lagInFrames);
    this.minQ = map(obj.minQ);
    this.maxQ = map(obj.maxQ);
    this.undershootPct = map(obj.undershootPct);
    this.overshootPct = map(obj.overshootPct);
    this.clientBufferSize = map(obj.clientBufferSize);
    this.clientInitialBufferSize = map(obj.clientInitialBufferSize);
    this.clientOptimalBufferSize = map(obj.clientOptimalBufferSize);
    this.tileColumns = map(obj.tileColumns);
    this.tileRows = map(obj.tileRows);
    this.isAutomaticAltRefFramesEnabled = map(obj.isAutomaticAltRefFramesEnabled);
    this.arnrMaxFrames = map(obj.arnrMaxFrames);
    this.arnrStrength = map(obj.arnrStrength);
    this.maxIntraRate = map(obj.maxIntraRate);
    this.isLossless = map(obj.isLossless);
    this.isFrameParallel = map(obj.isFrameParallel);
    this.sharpness = map(obj.sharpness);
    this.isFrameBoostEnabled = map(obj.isFrameBoostEnabled);
    this.noiseSensitivity = map(obj.noiseSensitivity);
    this.minGfInterval = map(obj.minGfInterval);
    this.maxGfInterval = map(obj.maxGfInterval);
    this.numTileGroups = map(obj.numTileGroups);
    this.mtuSize = map(obj.mtuSize);
  }

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
}

export default Av1VideoConfiguration;

