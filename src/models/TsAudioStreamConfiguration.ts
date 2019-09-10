import TsStreamConfiguration from './TsStreamConfiguration';

/**
 * @export
 * @class TsAudioStreamConfiguration
 */
export class TsAudioStreamConfiguration extends TsStreamConfiguration {
  constructor(obj?: Partial<TsAudioStreamConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default TsAudioStreamConfiguration;

