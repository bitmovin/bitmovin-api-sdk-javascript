import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<Av1VideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.presetConfiguration = map(obj.presetConfiguration);
  }
}

export default Av1VideoConfiguration;

