import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryTimeframe from './AnalyticsQueryTimeframe';

/**
 * @export
 * @class AnalyticsQueryRequest
 */
export class AnalyticsQueryRequest extends AnalyticsQueryTimeframe {
  /**
   * Analytics license key (required)
   * @type {string}
   * @memberof AnalyticsQueryRequest
   */
  public licenseKey?: string;

  /**
   * @type {AnalyticsAbstractFilter[]}
   * @memberof AnalyticsQueryRequest
   */
  public filters?: AnalyticsAbstractFilter[];

  /**
   * @type {AnalyticsOrderByEntry[]}
   * @memberof AnalyticsQueryRequest
   */
  public orderBy?: AnalyticsOrderByEntry[];

  /**
   * @type {AnalyticsAttribute}
   * @memberof AnalyticsQueryRequest
   */
  public dimension?: AnalyticsAttribute;

  /**
   * @type {AnalyticsInterval}
   * @memberof AnalyticsQueryRequest
   */
  public interval?: AnalyticsInterval;

  /**
   * @type {AnalyticsAttribute[]}
   * @memberof AnalyticsQueryRequest
   */
  public groupBy?: AnalyticsAttribute[];

  /**
   * Maximum number of rows returned (max. 200)
   * @type {number}
   * @memberof AnalyticsQueryRequest
   */
  public limit?: number;

  /**
   * Offset of data
   * @type {number}
   * @memberof AnalyticsQueryRequest
   */
  public offset?: number;

  constructor(obj?: Partial<AnalyticsQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.licenseKey = map(obj.licenseKey);
    this.filters = mapArray(obj.filters, AnalyticsAbstractFilter);
    this.orderBy = mapArray(obj.orderBy, AnalyticsOrderByEntry);
    this.dimension = map(obj.dimension);
    this.interval = map(obj.interval);
    this.groupBy = mapArray(obj.groupBy);
    this.limit = map(obj.limit);
    this.offset = map(obj.offset);
  }
}

export default AnalyticsQueryRequest;

