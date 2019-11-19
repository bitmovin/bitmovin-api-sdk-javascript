import {map, mapArray} from '../common/Mapper';
import InvitationStatus from './InvitationStatus';

/**
 * @export
 * @class Invitation
 */
export class Invitation {
  /**
   * @type {string}
   * @memberof Invitation
   */
  public id?: string;

  /**
   * Email address of the tenant. (required)
   * @type {string}
   * @memberof Invitation
   */
  public email?: string;

  /**
   * @type {InvitationStatus}
   * @memberof Invitation
   */
  public status?: InvitationStatus;

  /**
   * @type {string}
   * @memberof Invitation
   */
  public company?: string;

  /**
   * @type {string}
   * @memberof Invitation
   */
  public firstName?: string;

  /**
   * @type {string}
   * @memberof Invitation
   */
  public lastName?: string;

  /**
   * Creation date of the invitation in UTC format
   * @type {Date}
   * @memberof Invitation
   */
  public createdAt?: Date;

  /**
   * @type {string}
   * @memberof Invitation
   */
  public jobTitle?: string;

  /**
   * @type {string}
   * @memberof Invitation
   */
  public phone?: string;

  constructor(obj?: Partial<Invitation>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.email = map(obj.email);
    this.status = map(obj.status);
    this.company = map(obj.company);
    this.firstName = map(obj.firstName);
    this.lastName = map(obj.lastName);
    this.createdAt = map(obj.createdAt, Date);
    this.jobTitle = map(obj.jobTitle);
    this.phone = map(obj.phone);
  }
}

export default Invitation;

