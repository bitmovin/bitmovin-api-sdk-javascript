import {map} from '../common/Mapper';
import AccountApiKey from './AccountApiKey';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AccountInformation
 */
export class AccountInformation extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.email = map(obj.email);
    this.apiKeys = map<AccountApiKey>(obj.apiKeys, AccountApiKey);
    this.firstName = map(obj.firstName);
    this.lastName = map(obj.lastName);
    this.phone = map(obj.phone);
    this.company = map(obj.company);
  }

  /**
   * Email address of the account. (required)
   * @type {string}
   * @memberof AccountInformation
   */
  public email: string;
  /**
   * ApiKeys associated with the account (required)
   * @type {Array<AccountApiKey>}
   * @memberof AccountInformation
   */
  public apiKeys: Array<AccountApiKey>;
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
}

export default AccountInformation;

