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
   * Enable/disable automatic calculation of level, maxBitrate, and bufsize based on the least level that satisfies maximum property values for picture resolution, frame rate, and bit rate.
   * @type {AutoLevelSetup}
   * @memberof Av1VideoConfiguration
   */
  public autoLevelSetup?: AutoLevelSetup;

  constructor(obj?: Partial<Av1VideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.presetConfiguration = map(obj.presetConfiguration);
    this.autoLevelSetup = map(obj.autoLevelSetup);
  }
}

export default Av1VideoConfiguration;

