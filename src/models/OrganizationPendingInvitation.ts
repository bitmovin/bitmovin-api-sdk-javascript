import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class OrganizationPendingInvitation
 */
export class OrganizationPendingInvitation {
  /**
   * Id of Tenant (required)
   * @type {string}
   * @memberof OrganizationPendingInvitation
   */
  public id?: string;

  /**
   * Email of Tenant (required)
   * @type {string}
   * @memberof OrganizationPendingInvitation
   */
  public email?: string;

  /**
   * Id of group (required)
   * @type {string}
   * @memberof OrganizationPendingInvitation
   */
  public groupId?: string;

  /**
   * Name of group (required)
   * @type {string}
   * @memberof OrganizationPendingInvitation
   */
  public groupName?: string;

  constructor(obj?: Partial<OrganizationPendingInvitation>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.email = map(obj.email);
    this.groupId = map(obj.groupId);
    this.groupName = map(obj.groupName);
  }
}

export default OrganizationPendingInvitation;

