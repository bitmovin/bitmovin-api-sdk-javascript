import {map, mapArray} from '../common/Mapper';
import AnalyticsHttpRequestType from './AnalyticsHttpRequestType';

/**
 * @export
 * @class AnalyticsHttpRequest
 */
export class AnalyticsHttpRequest {
  /**
   * Client timestamp
   * @type {Date}
   * @memberof AnalyticsHttpRequest
   */
  public clientTime?: Date;

  /**
   * @type {AnalyticsHttpRequestType}
   * @memberof AnalyticsHttpRequest
   */
  public type?: AnalyticsHttpRequestType;

  /**
   * Http request URL
   * @type {string}
   * @memberof AnalyticsHttpRequest
   */
  public url?: string;

  /**
   * Last redirect location
   * @type {string}
   * @memberof AnalyticsHttpRequest
   */
  public lastRedirectLocation?: string;

  /**
   * Http request status
   * @type {number}
   * @memberof AnalyticsHttpRequest
   */
  public httpStatus?: number;

  /**
   * Download time
   * @type {number}
   * @memberof AnalyticsHttpRequest
   */
  public downloadTime?: number;

  /**
   * Time to first byte
   * @type {number}
   * @memberof AnalyticsHttpRequest
   */
  public timeToFirstByte?: number;

  /**
   * Size
   * @type {number}
   * @memberof AnalyticsHttpRequest
   */
  public size?: number;

  /**
   * Was http request successful
   * @type {boolean}
   * @memberof AnalyticsHttpRequest
   */
  public success?: boolean;

  constructor(obj?: Partial<AnalyticsHttpRequest>) {
    if(!obj) {
      return;
    }
    this.clientTime = map(obj.clientTime, Date);
    this.type = map(obj.type);
    this.url = map(obj.url);
    this.lastRedirectLocation = map(obj.lastRedirectLocation);
    this.httpStatus = map(obj.httpStatus);
    this.downloadTime = map(obj.downloadTime);
    this.timeToFirstByte = map(obj.timeToFirstByte);
    this.size = map(obj.size);
    this.success = map(obj.success);
  }
}

export default AnalyticsHttpRequest;

