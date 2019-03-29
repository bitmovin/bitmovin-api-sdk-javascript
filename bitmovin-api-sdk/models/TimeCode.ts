import {map} from '../common/Mapper';

/**
 * @export
 * @class TimeCode
 */
export default class TimeCode {
  constructor(obj: any) {
    this.timeCodeStart = map(obj.timeCodeStart);
  }

  /**
   * Specify start timecode for writing.
   * @type {string}
   * @memberof TimeCode
   */
  public timeCodeStart?: string;
}
