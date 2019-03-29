import {map} from '../common/Mapper';
import StorageStatistics from './StorageStatistics';

/**
 * @export
 * @class OverallStatistics
 */
export default class OverallStatistics {
  constructor(obj: any) {
    this.bytesStoredTotal = map(obj.bytesStoredTotal);
    this.bytesTransferredTotal = map(obj.bytesTransferredTotal);
    this.storages = map<StorageStatistics>(obj.storages, StorageStatistics);
  }

  /**
   * @type {number}
   * @memberof OverallStatistics
   */
  public bytesStoredTotal?: number;
  /**
   * @type {number}
   * @memberof OverallStatistics
   */
  public bytesTransferredTotal?: number;
  /**
   * @type {Array<StorageStatistics>}
   * @memberof OverallStatistics
   */
  public storages?: Array<StorageStatistics>;
}
