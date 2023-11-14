import {map, mapArray} from '../common/Mapper';
import InvitationStatus from './InvitationStatus';
import TenantGroupDetail from './TenantGroupDetail';

/**
 * @export
 * @class TenantWithGroups
 */
export class TenantWithGroups {
  /**
   * Id of Tenant
   * @type {string}
   * @memberof TenantWithGroups
   */
  public id?: string;

  /**
   * Email of Tenant
   * @type {string}
   * @memberof TenantWithGroups
   */
  public email?: string;

  /**
   * @type {InvitationStatus}
   * @memberof TenantWithGroups
   */
  public invitationStatus?: InvitationStatus;

  /**
   * List of all groups of Tenant
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
    this.invitationStatus = map(obj.invitationStatus);
    this.groups = mapArray(obj.groups, TenantGroupDetail);
  }
}

export default TenantWithGroups;

