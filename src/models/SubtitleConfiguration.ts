import CodecConfiguration from './CodecConfiguration';

/**
 * @export
 * @class SubtitleConfiguration
 */
export class SubtitleConfiguration extends CodecConfiguration {
  constructor(obj?: Partial<SubtitleConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default SubtitleConfiguration;

