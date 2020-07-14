import CodecConfigType from './CodecConfigType';
import CodecConfiguration from './CodecConfiguration';

/**
 * @export
 * @class DtsPassthroughAudioConfiguration
 */
export class DtsPassthroughAudioConfiguration extends CodecConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof DtsPassthroughAudioConfiguration
   */
  public type: CodecConfigType.DTS_PASSTHROUGH = CodecConfigType.DTS_PASSTHROUGH;

  constructor(obj?: Partial<DtsPassthroughAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DtsPassthroughAudioConfiguration;

