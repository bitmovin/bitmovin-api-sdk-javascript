import {map, mapArray} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';
import ColorConfig from './ColorConfig';
import DisplayAspectRatio from './DisplayAspectRatio';
import EncodingMode from './EncodingMode';
import H265DynamicRangeFormat from './H265DynamicRangeFormat';
import H265V2MotionCompensatedTemporalFiltering from './H265V2MotionCompensatedTemporalFiltering';
import H265V2PresetConfiguration from './H265V2PresetConfiguration';
import H265V2RateControlModeConfig from './H265V2RateControlModeConfig';
import PixelFormat from './PixelFormat';
import VideoConfiguration from './VideoConfiguration';

/**
 * @export
 * @class H265V2VideoConfiguration
 */
export class H265V2VideoConfiguration extends VideoConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof H265V2VideoConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.H265V2;

  /**
   * Use a set of well defined configurations preset to support certain use cases. Can be overwritten with more specific values.
   * @type {H265V2PresetConfiguration}
   * @memberof H265V2VideoConfiguration
   */
  public presetConfiguration?: H265V2PresetConfiguration;

  /**
   * Automatically configures the encoder for the given SDR/HDR format.
   * @type {H265DynamicRangeFormat}
   * @memberof H265V2VideoConfiguration
   */
  public dynamicRangeFormat?: H265DynamicRangeFormat;

  /**
   * Rate control mode configuration. Used to Configure the Perceptual Encoding Mode Settings.
   * @type {H265V2RateControlModeConfig}
   * @memberof H265V2VideoConfiguration
   */
  public rateControlModeConfig?: H265V2RateControlModeConfig;

  /**
   * Motion compensated temporal filtering mode.
   * @type {H265V2MotionCompensatedTemporalFiltering}
   * @memberof H265V2VideoConfiguration
   */
  public motionCompensatedTemporalFiltering?: H265V2MotionCompensatedTemporalFiltering;

  /**
   * Set codec tier to high when true, main when false.
   * @type {boolean}
   * @memberof H265V2VideoConfiguration
   */
  public levelHighTier?: boolean;

  constructor(obj?: Partial<H265V2VideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.presetConfiguration = map(obj.presetConfiguration);
    this.dynamicRangeFormat = map(obj.dynamicRangeFormat);
    this.rateControlModeConfig = map(obj.rateControlModeConfig, H265V2RateControlModeConfig);
    this.motionCompensatedTemporalFiltering = map(obj.motionCompensatedTemporalFiltering);
    this.levelHighTier = map(obj.levelHighTier);
  }
}

export default H265V2VideoConfiguration;

