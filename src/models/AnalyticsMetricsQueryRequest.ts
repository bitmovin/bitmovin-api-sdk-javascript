import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsFilter from './AnalyticsFilter';
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
  public licenseKey: string;

  /**
   * @type {AnalyticsFilter[]}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public filters?: AnalyticsFilter[];

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
    this.licenseKey = map(obj.licenseKey);
    this.filters = map<AnalyticsFilter>(obj.filters, AnalyticsFilter);
    this.orderBy = map<AnalyticsOrderByEntry>(obj.orderBy, AnalyticsOrderByEntry);
    this.interval = map(obj.interval);
    this.groupBy = map(obj.groupBy);
    this.limit = map(obj.limit);
    this.offset = map(obj.offset);
  }
}

export default AnalyticsMetricsQueryRequest;

