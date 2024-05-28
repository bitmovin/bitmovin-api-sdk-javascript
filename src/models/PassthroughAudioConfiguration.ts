import CodecConfigType from './CodecConfigType';
import CodecConfiguration from './CodecConfiguration';

/**
 * @export
 * @class PassthroughAudioConfiguration
 */
export class PassthroughAudioConfiguration extends CodecConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof PassthroughAudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.AUDIO_PASSTHROUGH;

  constructor(obj?: Partial<PassthroughAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default PassthroughAudioConfiguration;

