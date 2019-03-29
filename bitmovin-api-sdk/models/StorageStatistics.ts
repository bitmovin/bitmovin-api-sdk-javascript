import {map} from '../common/Mapper';

/**
 * @export
 * @class StorageStatistics
 */
export default class StorageStatistics {
  constructor(obj: any) {
    this.bytesStored = map(obj.bytesStored);
    this.bytesTransferred = map(obj.bytesTransferred);
    this.storage = map(obj.storage);
  }

  /**
   * @type {number}
   * @memberof StorageStatistics
   */
  public bytesStored?: number;
  /**
   * @type {number}
   * @memberof StorageStatistics
   */
  public bytesTransferred?: number;
  /**
   * @type {string}
   * @memberof StorageStatistics
   */
  public storage?: string;
}
