import {map, mapArray} from '../common/Mapper';
import AutoLevelSetup from './AutoLevelSetup';
import Av1PresetConfiguration from './Av1PresetConfiguration';
import CodecConfigType from './CodecConfigType';
import ColorConfig from './ColorConfig';
import DisplayAspectRatio from './DisplayAspectRatio';
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
  public readonly type: CodecConfigType = CodecConfigType.AV1;

  /**
   * Use a set of well defined configurations preset to support certain use cases. Can be overwritten with more specific values.
   * @type {Av1PresetConfiguration}
   * @memberof Av1VideoConfiguration
   */
  public presetConfiguration?: Av1PresetConfiguration;

  /**
   * Enable/disable automatic calculation of level, maxBitrate, and bufsize based on the least level that satisfies maximum property values for picture resolution, frame rate, and bit rate. In the case the target level is set explicitly, the maximum bitrate and buffer size are calculated based on the defined level. Explicitly setting maxBitrate, or bufsize properties will disable the automatic calculation.
   * @type {AutoLevelSetup}
   * @memberof Av1VideoConfiguration
   */
  public autoLevelSetup?: AutoLevelSetup;

  /**
   * Set the mastering display color volume metadata. The chromaticity coordinates for the green (G), blue (B), red (R) primaries and the white point (WP) are given in increments of 0.00002 (i.e. multiply the actual value by 50000), and the luminance values (L) are given in increments of 0.0001 cd/m² (i.e. multiply the actual value by 10000). For example `G(13250,34500)B(7500,3000)R(34000,16000)WP(15635,16450)L(10000000,1)` describes a P3D65 1000-nits monitor, where G(x=0.265, y=0.690), B(x=0.150, y=0.060), R(x=0.680, y=0.320), WP(x=0.3127, y=0.3290), L(max=1000, min=0.0001). Part of HDR-10 metadata.
   * @type {string}
   * @memberof Av1VideoConfiguration
   */
  public masterDisplay?: string;

  /**
   * Set the max content light level (MaxCLL). Use together with maxPictureAverageLightLevel (which will be 0 if not set). Part of HDR-10 metadata.
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public maxContentLightLevel?: number;

  /**
   * Set the maximum picture average light level (MaxFALL). Use together with maxContentLightLevel (which will be 0 if not set). Part of HDR-10 metadata.
   * @type {number}
   * @memberof Av1VideoConfiguration
   */
  public maxPictureAverageLightLevel?: number;

  constructor(obj?: Partial<Av1VideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.presetConfiguration = map(obj.presetConfiguration);
    this.autoLevelSetup = map(obj.autoLevelSetup);
    this.masterDisplay = map(obj.masterDisplay);
    this.maxContentLightLevel = map(obj.maxContentLightLevel);
    this.maxPictureAverageLightLevel = map(obj.maxPictureAverageLightLevel);
  }
}

export default Av1VideoConfiguration;

