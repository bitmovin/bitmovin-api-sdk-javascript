import {map, mapArray} from '../common/Mapper';
import ProgramDateTimePlacement from './ProgramDateTimePlacement';
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

  /**
   * @type {ProgramDateTimePlacement}
   * @memberof ProgramDateTimeSettings
   */
  public programDateTimePlacement?: ProgramDateTimePlacement;

  constructor(obj?: Partial<ProgramDateTimeSettings>) {
    if(!obj) {
      return;
    }
    this.programDateTimeSource = map(obj.programDateTimeSource);
    this.programDateTimePlacement = map(obj.programDateTimePlacement, ProgramDateTimePlacement);
  }
}

export default ProgramDateTimeSettings;

