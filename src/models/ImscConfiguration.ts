import {map, mapArray} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';
import ImscStyling from './ImscStyling';
import SubtitleConfiguration from './SubtitleConfiguration';

/**
 * @export
 * @class ImscConfiguration
 */
export class ImscConfiguration extends SubtitleConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof ImscConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.IMSC;

  /**
   * @type {ImscStyling}
   * @memberof ImscConfiguration
   */
  public styling?: ImscStyling;

  constructor(obj?: Partial<ImscConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.styling = map(obj.styling, ImscStyling);
  }
}

export default ImscConfiguration;

