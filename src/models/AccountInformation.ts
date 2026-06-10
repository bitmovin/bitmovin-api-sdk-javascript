import {map, mapArray} from '../common/Mapper';
import AccountApiKey from './AccountApiKey';
import BitmovinResource from './BitmovinResource';
import Marketplace from './Marketplace';

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

  /**
   * @type {boolean}
   * @memberof AccountInformation
   */
  public verified?: boolean;

  /**
   * @type {Marketplace}
   * @memberof AccountInformation
   */
  public marketplace?: Marketplace;

  /**
   * @type {boolean}
   * @memberof AccountInformation
   */
  public mfaEnabled?: boolean;

  /**
   * @type {string}
   * @memberof AccountInformation
   */
  public intercomIdVerification?: string;

  /**
   * The Saml Domain of this Account
   * @type {string}
   * @memberof AccountInformation
   */
  public samlDomain?: string;

  /**
   * Whether the user has accepted the Terms of Service. Users created via SAML SSO start as `false` because the SAML flow bypasses the registration form that normally captures TOS acceptance; all other signup paths default to `true`. Acceptance is one-way: sending `true` accepts the TOS, sending `false` is ignored.
   * @type {boolean}
   * @memberof AccountInformation
   */
  public tosAccepted?: boolean;

  constructor(obj?: Partial<AccountInformation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.email = map(obj.email);
    this.apiKeys = mapArray(obj.apiKeys, AccountApiKey);
    this.firstName = map(obj.firstName);
    this.lastName = map(obj.lastName);
    this.phone = map(obj.phone);
    this.company = map(obj.company);
    this.verified = map(obj.verified);
    this.marketplace = map(obj.marketplace);
    this.mfaEnabled = map(obj.mfaEnabled);
    this.intercomIdVerification = map(obj.intercomIdVerification);
    this.samlDomain = map(obj.samlDomain);
    this.tosAccepted = map(obj.tosAccepted);
  }
}

export default AccountInformation;

