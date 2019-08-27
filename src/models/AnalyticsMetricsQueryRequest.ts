import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryTimeframe from './AnalyticsQueryTimeframe';

/**
 * @export
 * @class AnalyticsMetricsQueryRequest
 */
export class AnalyticsMetricsQueryRequest extends AnalyticsQueryTimeframe {
  /**
   * Analytics license key (required)
   * @type {string}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public licenseKey?: string;

  /**
   * @type {AnalyticsAbstractFilter[]}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public filters?: AnalyticsAbstractFilter[];

  /**
   * @type {AnalyticsOrderByEntry[]}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public orderBy?: AnalyticsOrderByEntry[];

  /**
   * @type {AnalyticsInterval}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public interval?: AnalyticsInterval;

  /**
   * @type {AnalyticsAttribute[]}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public groupBy?: AnalyticsAttribute[];

  /**
   * Maximum number of rows returned (max. 200)
   * @type {number}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public limit?: number;

  /**
   * Offset of data used for pagination
   * @type {number}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public offset?: number;

  constructor(obj: Partial<AnalyticsMetricsQueryRequest>) {
    super(obj);

    this.licenseKey = obj.licenseKey;
    this.filters = map<AnalyticsAbstractFilter>(obj.filters, AnalyticsAbstractFilter) || [];
    this.orderBy = map<AnalyticsOrderByEntry>(obj.orderBy, AnalyticsOrderByEntry) || [];
    this.interval = obj.interval;
    this.groupBy = obj.groupBy || [];
    this.limit = obj.limit;
    this.offset = obj.offset;
  }
}

export default AnalyticsMetricsQueryRequest;

