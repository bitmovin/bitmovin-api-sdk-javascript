import {map} from '../common/Mapper';
import AccountApiKey from './AccountApiKey';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AccountInformation
 */
export class AccountInformation extends BitmovinResource {
  /**
   * Email address of the account. (required)
   * @type {string}
   * @memberof AccountInformation
   */
  public email?: string;

  /**
   * ApiKeys associated with the account (required)
   * @type {AccountApiKey[]}
   * @memberof AccountInformation
   */
  public apiKeys?: AccountApiKey[];

  /**
   * First name of the tenant.
   * @type {string}
   * @memberof AccountInformation
   */
  public firstName?: string;

  /**
   * Last name of the tenant.
   * @type {string}
   * @memberof AccountInformation
   */
  public lastName?: string;

  /**
   * Phone number of the tenant.
   * @type {string}
   * @memberof AccountInformation
   */
  public phone?: string;

  /**
   * Company name of the tenant.
   * @type {string}
   * @memberof AccountInformation
   */
  public company?: string;

  constructor(obj: Partial<AccountInformation>) {
    super(obj);

    this.email = obj.email;
    this.apiKeys = map<AccountApiKey>(obj.apiKeys, AccountApiKey) || [];
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.phone = obj.phone;
    this.company = obj.company;
  }
}

export default AccountInformation;

