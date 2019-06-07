import {map} from '../common/Mapper';

/**
 * @export
 * @class UtcTiming
 */
export class UtcTiming {
  constructor(obj: any) {
    this.value = map(obj.value);
    this.schemeIdUri = map(obj.schemeIdUri);
  }

  /**
   * The server to get the time from
   * @type {string}
   * @memberof UtcTiming
   */
  public value: string;
  /**
   * The scheme id to use. Please refer to the DASH standard.
   * @type {string}
   * @memberof UtcTiming
   */
  public schemeIdUri: string;
}

export default UtcTiming;

