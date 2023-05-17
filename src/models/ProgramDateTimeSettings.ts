import {map, mapArray} from '../common/Mapper';
import ProgramDateTimeSource from './ProgramDateTimeSource';

/**
 * @export
 * @class ProgramDateTimeSettings
 */
export class ProgramDateTimeSettings {
  /**
   * @type {ProgramDateTimeSource}
   * @memberof ProgramDateTimeSettings
   */
  public programDateTimeSource?: ProgramDateTimeSource;

  constructor(obj?: Partial<ProgramDateTimeSettings>) {
    if(!obj) {
      return;
    }
    this.programDateTimeSource = map(obj.programDateTimeSource);
  }
}

export default ProgramDateTimeSettings;

