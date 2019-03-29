import {map} from '../common/Mapper';
import FolderEntryType from './FolderEntryType';

/**
 * @export
 * @class FolderEntry
 */
export default class FolderEntry {
  constructor(obj: any) {
    this.type = map(obj.type);
    this.path = map(obj.path);
  }

  /**
   * @type {FolderEntryType}
   * @memberof FolderEntry
   */
  public type?: FolderEntryType;
  /**
   * @type {string}
   * @memberof FolderEntry
   */
  public path?: string;
}
