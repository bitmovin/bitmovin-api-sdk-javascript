import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class Period
 */
export class Period extends BitmovinResponse {
  /**
   * Starting time in seconds
   * @type {number}
   * @memberof Period
   */
  public start?: number;

  /**
   * Duration in seconds.<br/>Please note that the duration of a Period is usually determined by the media contained therein.<br/>Setting the `duration` property to a specific value will override this default behaviour.<br/>Warning: Use at your own risk!
   * @type {number}
   * @memberof Period
   */
  public duration?: number;

  constructor(obj?: Partial<Period>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.start = map(obj.start);
    this.duration = map(obj.duration);
  }
}

export default Period;

