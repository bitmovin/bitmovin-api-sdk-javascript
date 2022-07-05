import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class CdnUsage
 */
export class CdnUsage {
  /**
   * UTC timestamp which marks the beginning of the time period for which the usage statistics are retrieved.
   * @type {Date}
   * @memberof CdnUsage
   */
  public from?: Date;

  /**
   * UTC timestamp which marks the end of the time period for which the usage statistics are retrieved. The end date is exclusive. For example, if end is 2019-03-29T13:05:00Z, the cost and usage data are retrieved from the start date up to, but not including, 2019-03-29T13:05:00Z.
   * @type {Date}
   * @memberof CdnUsage
   */
  public to?: Date;

  /**
   * Storage usage in GB per month.
   * @type {number}
   * @memberof CdnUsage
   */
  public storageUsage?: number;

  /**
   * Transfer usage in GB.
   * @type {number}
   * @memberof CdnUsage
   */
  public transferUsage?: number;

  constructor(obj?: Partial<CdnUsage>) {
    if(!obj) {
      return;
    }
    this.from = map(obj.from, Date);
    this.to = map(obj.to, Date);
    this.storageUsage = map(obj.storageUsage);
    this.transferUsage = map(obj.transferUsage);
  }
}

export default CdnUsage;

