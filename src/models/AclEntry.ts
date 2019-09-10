import {map, mapArray} from '../common/Mapper';
import AclPermission from './AclPermission';

/**
 * @export
 * @class AclEntry
 */
export class AclEntry {
  /**
   * @type {string}
   * @memberof AclEntry
   */
  public scope?: string;

  /**
   * @type {AclPermission}
   * @memberof AclEntry
   */
  public permission?: AclPermission;

  constructor(obj?: Partial<AclEntry>) {
    if(!obj) {
      return;
    }
    this.scope = map(obj.scope);
    this.permission = map(obj.permission);
  }
}

export default AclEntry;

