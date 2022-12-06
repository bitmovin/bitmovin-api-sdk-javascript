import {map, mapArray} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';
import ColorConfig from './ColorConfig';
import DisplayAspectRatio from './DisplayAspectRatio';
import EncodingMode from './EncodingMode';
import H262InterlaceMode from './H262InterlaceMode';
import H262PresetConfiguration from './H262PresetConfiguration';
import LevelH262 from './LevelH262';
import PixelFormat from './PixelFormat';
import ProfileH262 from './ProfileH262';
import VideoConfiguration from './VideoConfiguration';

/**
 * @export
 * @class H262VideoConfiguration
 */
export class H262VideoConfiguration extends VideoConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof H262VideoConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.H262;

  /**
   * Use a set of well defined configurations preset to support certain use cases. Can be overwritten with more specific values.
   * @type {H262PresetConfiguration}
   * @memberof H262VideoConfiguration
   */
  public presetConfiguration?: H262PresetConfiguration;

  /**
   * When setting a profile, all other settings must not exceed the limits which are defined in the profile. Otherwise, a higher profile may be automatically chosen. (required)
   * @type {ProfileH262}
   * @memberof H262VideoConfiguration
   */
  public profile?: ProfileH262;

  /**
   * Amount of b frames.
   * @type {number}
   * @memberof H262VideoConfiguration
   */
  public bframes?: number;

  /**
   * Maximum Bitrate
   * @type {number}
   * @memberof H262VideoConfiguration
   */
  public maxBitrate?: number;

  /**
   * Minimum Bitrate
   * @type {number}
   * @memberof H262VideoConfiguration
   */
  public minBitrate?: number;

  /**
   * Playback device buffer size
   * @type {number}
   * @memberof H262VideoConfiguration
   */
  public bufsize?: number;

  /**
   * Minimum GOP length, the minimum distance between I-frames
   * @type {number}
   * @memberof H262VideoConfiguration
   */
  public gopSize?: number;

  /**
   * Specified set of constraints that indicate a degree of required decoder performance for a profile
   * @type {LevelH262}
   * @memberof H262VideoConfiguration
   */
  public level?: LevelH262;

  /**
   * Using TOP_FIELD_FIRST or BOTTOM_FIELD_FIRST will output interlaced video
   * @type {H262InterlaceMode}
   * @memberof H262VideoConfiguration
   */
  public interlaceMode?: H262InterlaceMode;

  constructor(obj?: Partial<H262VideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.presetConfiguration = map(obj.presetConfiguration);
    this.profile = map(obj.profile);
    this.bframes = map(obj.bframes);
    this.maxBitrate = map(obj.maxBitrate);
    this.minBitrate = map(obj.minBitrate);
    this.bufsize = map(obj.bufsize);
    this.gopSize = map(obj.gopSize);
    this.level = map(obj.level);
    this.interlaceMode = map(obj.interlaceMode);
  }
}

export default H262VideoConfiguration;

