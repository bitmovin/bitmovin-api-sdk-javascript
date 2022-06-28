import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsQueryTimeframe from './AnalyticsQueryTimeframe';

/**
 * @export
 * @class AdAnalyticsQueryRequest
 */
export class AdAnalyticsQueryRequest extends AnalyticsQueryTimeframe {
  /**
   * Analytics license key (required)
   * @type {string}
   * @memberof AdAnalyticsQueryRequest
   */
  public licenseKey?: string;

  /**
   * Analytics Query Filters  Each filter requires 3 properties: name, operator and value.   Valid operators are [IN, EQ, NE, LT, LTE, GT, GTE, CONTAINS, NOTCONTAINS] 
   * @type {AdAnalyticsAbstractFilter[]}
   * @memberof AdAnalyticsQueryRequest
   */
  public filters?: AdAnalyticsAbstractFilter[];

  /**
   * @type {AdAnalyticsOrderByEntry[]}
   * @memberof AdAnalyticsQueryRequest
   */
  public orderBy?: AdAnalyticsOrderByEntry[];

  /**
   * @type {AdAnalyticsAttribute}
   * @memberof AdAnalyticsQueryRequest
   */
  public dimension?: AdAnalyticsAttribute;

  /**
   * @type {AnalyticsInterval}
   * @memberof AdAnalyticsQueryRequest
   */
  public interval?: AnalyticsInterval;

  /**
   * @type {AdAnalyticsAttribute[]}
   * @memberof AdAnalyticsQueryRequest
   */
  public groupBy?: AdAnalyticsAttribute[];

  /**
   * Maximum number of rows returned (max. 200)
   * @type {number}
   * @memberof AdAnalyticsQueryRequest
   */
  public limit?: number;

  /**
   * Offset of data
   * @type {number}
   * @memberof AdAnalyticsQueryRequest
   */
  public offset?: number;

  constructor(obj?: Partial<AdAnalyticsQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.licenseKey = map(obj.licenseKey);
    this.filters = mapArray(obj.filters, AdAnalyticsAbstractFilter);
    this.orderBy = mapArray(obj.orderBy, AdAnalyticsOrderByEntry);
    this.dimension = map(obj.dimension);
    this.interval = map(obj.interval);
    this.groupBy = mapArray(obj.groupBy);
    this.limit = map(obj.limit);
    this.offset = map(obj.offset);
  }
}

export default AdAnalyticsQueryRequest;

