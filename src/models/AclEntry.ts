import {map, mapArray} from '../common/Mapper';
import AclPermission from './AclPermission';

/**
 * @export
 * @class AclEntry
 */
export class AclEntry {
  /**
   * Deprecation notice: The value of this property is not being used. It can be chosen arbitrarily or not set at all
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

