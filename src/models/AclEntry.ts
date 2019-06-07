import {map} from '../common/Mapper';
import AclPermission from './AclPermission';

/**
 * @export
 * @class AclEntry
 */
export class AclEntry {
  constructor(obj: any) {
    this.scope = map(obj.scope);
    this.permission = map(obj.permission);
  }

  /**
   * @type {string}
   * @memberof AclEntry
   */
  public scope?: string;
  /**
   * @type {AclPermission}
   * @memberof AclEntry
   */
  public permission: AclPermission;
}

export default AclEntry;

