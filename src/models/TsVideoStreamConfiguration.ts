import TsStreamConfiguration from './TsStreamConfiguration';

/**
 * @export
 * @class TsVideoStreamConfiguration
 */
export class TsVideoStreamConfiguration extends TsStreamConfiguration {
  constructor(obj?: Partial<TsVideoStreamConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default TsVideoStreamConfiguration;

