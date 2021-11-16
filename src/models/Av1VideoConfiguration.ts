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
  public type: CodecConfigType.AV1 = CodecConfigType.AV1;

  constructor(obj?: Partial<Av1VideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default Av1VideoConfiguration;

