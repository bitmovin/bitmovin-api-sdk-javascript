import {map} from '../common/Mapper';
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

  constructor(obj: Partial<AnalyticsQueryRequest>) {
    super(obj);

    this.licenseKey = obj.licenseKey;
    this.filters = map<AnalyticsAbstractFilter>(obj.filters, AnalyticsAbstractFilter) || [];
    this.orderBy = map<AnalyticsOrderByEntry>(obj.orderBy, AnalyticsOrderByEntry) || [];
    this.dimension = obj.dimension;
    this.interval = obj.interval;
    this.groupBy = obj.groupBy || [];
    this.limit = obj.limit;
    this.offset = obj.offset;
  }
}

export default AnalyticsQueryRequest;

