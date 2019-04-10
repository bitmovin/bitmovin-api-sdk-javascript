import {map} from '../common/Mapper';

/**
 * @export
 * @class TimeSpan
 */
export default class TimeSpan {
  constructor(obj: any) {
    this.from = map(obj.from);
    this.to = map(obj.to);
  }

  /**
   * Start offset of the time frame in milliseconds
   * @type {number}
   * @memberof TimeSpan
   */
  public from: number;
  /**
   * End offset of the time frame in milliseconds
   * @type {number}
   * @memberof TimeSpan
   */
  public to: number;
}
