import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SimpleEncodingVodJobErrors
 */
export class SimpleEncodingVodJobErrors {
  /**
   * Stable code that identifies the error type.
   * @type {string}
   * @memberof SimpleEncodingVodJobErrors
   */
  public errorCode?: string;

  /**
   * Human readable description of the error.
   * @type {string}
   * @memberof SimpleEncodingVodJobErrors
   */
  public message?: string;

  /**
   * Additional details of the error if available.
   * @type {string}
   * @memberof SimpleEncodingVodJobErrors
   */
  public details?: string;

  constructor(obj?: Partial<SimpleEncodingVodJobErrors>) {
    if(!obj) {
      return;
    }
    this.errorCode = map(obj.errorCode);
    this.message = map(obj.message);
    this.details = map(obj.details);
  }
}

export default SimpleEncodingVodJobErrors;

