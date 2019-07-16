import {map} from '../common/Mapper';

/**
 * @export
 * @class UtcTiming
 */
export class UtcTiming {
  /**
   * The server to get the time from (required)
   * @type {string}
   * @memberof UtcTiming
   */
  public value: string;

  /**
   * The scheme id to use. Please refer to the DASH standard. (required)
   * @type {string}
   * @memberof UtcTiming
   */
  public schemeIdUri: string;

  constructor(obj: Partial<UtcTiming>) {
    this.value = map(obj.value);
    this.schemeIdUri = map(obj.schemeIdUri);
  }
}

export default UtcTiming;

