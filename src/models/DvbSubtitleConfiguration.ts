import CodecConfigType from './CodecConfigType';
import SubtitleConfiguration from './SubtitleConfiguration';

/**
 * @export
 * @class DvbSubtitleConfiguration
 */
export class DvbSubtitleConfiguration extends SubtitleConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof DvbSubtitleConfiguration
   */
  public type: CodecConfigType.DVB_SUBTITLE = CodecConfigType.DVB_SUBTITLE;

  constructor(obj?: Partial<DvbSubtitleConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DvbSubtitleConfiguration;

