import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class TimeCode
 */
export class TimeCode {
  /**
   * Specify start timecode for writing.
   * @type {string}
   * @memberof TimeCode
   */
  public timeCodeStart?: string;

  constructor(obj?: Partial<TimeCode>) {
    if(!obj) {
      return;
    }
    this.timeCodeStart = map(obj.timeCodeStart);
  }
}

export default TimeCode;

