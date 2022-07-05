import {map, mapArray} from '../common/Mapper';
import CdnUsage from './CdnUsage';

/**
 * @export
 * @class CdnUsageStatistics
 */
export class CdnUsageStatistics {
  /**
   * UTC timestamp which marks the beginning of the time period for which the usage statistics are retrieved.
   * @type {Date}
   * @memberof CdnUsageStatistics
   */
  public from?: Date;

  /**
   * UTC timestamp which marks the end of the time period for which the usage statistics are retrieved. The end date is exclusive. For example, if end is 2019-03-28T13:05:00Z, the cost and usage data are retrieved from the start date up to, but not including, 2019-03-28T13:05:00Z.
   * @type {Date}
   * @memberof CdnUsageStatistics
   */
  public to?: Date;

  /**
   * Total storage usage in GB per month.
   * @type {number}
   * @memberof CdnUsageStatistics
   */
  public storageUsageTotal?: number;

  /**
   * Total transfer usage in GB.
   * @type {number}
   * @memberof CdnUsageStatistics
   */
  public transferUsageTotal?: number;

  /**
   * @type {CdnUsage[]}
   * @memberof CdnUsageStatistics
   */
  public usage?: CdnUsage[];

  constructor(obj?: Partial<CdnUsageStatistics>) {
    if(!obj) {
      return;
    }
    this.from = map(obj.from, Date);
    this.to = map(obj.to, Date);
    this.storageUsageTotal = map(obj.storageUsageTotal);
    this.transferUsageTotal = map(obj.transferUsageTotal);
    this.usage = mapArray(obj.usage, CdnUsage);
  }
}

export default CdnUsageStatistics;

