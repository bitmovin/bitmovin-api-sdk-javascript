import {map, mapArray} from '../common/Mapper';
import TenantGroupDetail from './TenantGroupDetail';

/**
 * @export
 * @class TenantWithGroups
 */
export class TenantWithGroups {
  /**
   * Id of Tenant (required)
   * @type {string}
   * @memberof TenantWithGroups
   */
  public id?: string;

  /**
   * Email of Tenant (required)
   * @type {string}
   * @memberof TenantWithGroups
   */
  public email?: string;

  /**
   * List of all groups of Tenant (required)
   * @type {TenantGroupDetail[]}
   * @memberof TenantWithGroups
   */
  public groups?: TenantGroupDetail[];

  constructor(obj?: Partial<TenantWithGroups>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.email = map(obj.email);
    this.groups = mapArray(obj.groups, TenantGroupDetail);
  }
}

export default TenantWithGroups;

