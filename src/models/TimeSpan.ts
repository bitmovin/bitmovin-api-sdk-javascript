import {map} from '../common/Mapper';

/**
 * @export
 * @class TimeSpan
 */
export class TimeSpan {
  /**
   * Start offset of the time frame in milliseconds (required)
   * @type {number}
   * @memberof TimeSpan
   */
  public from?: number;

  /**
   * End offset of the time frame in milliseconds (required)
   * @type {number}
   * @memberof TimeSpan
   */
  public to?: number;

  constructor(obj: Partial<TimeSpan>) {

    this.from = obj.from;
    this.to = obj.to;
  }
}

export default TimeSpan;

