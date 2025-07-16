import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AwsAccount
 */
export class AwsAccount extends BitmovinResource {
  /**
   * Deprecated: Amazon access key for legacy support. Use roleName instead
   * @type {string}
   * @memberof AwsAccount
   */
  public accessKey?: string;

  /**
   * Deprecated: Amazon secret key for legacy support. Use roleName instead
   * @type {string}
   * @memberof AwsAccount
   */
  public secretKey?: string;

  /**
   * Amazon account number (12 digits as per AWS spec) (required)
   * @type {string}
   * @memberof AwsAccount
   */
  public accountNumber?: string;

  /**
   * Role name including path for the AWS IAM role that will be used by Bitmovin to access the AWS account depicted by accountNumber. The role ARN is constructed based on accountNumber and roleName: arn:aws:iam::{accountNumber}:role/{roleName}
   * @type {string}
   * @memberof AwsAccount
   */
  public roleName?: string;

  /**
   * External ID that needs to be set in the trust policy of the AWS IAM role (depicted by roleName) that allows Bitmovin access to the AWS account depicted by accountNumber
   * @type {string}
   * @memberof AwsAccount
   */
  public externalId?: string;

  constructor(obj?: Partial<AwsAccount>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.accountNumber = map(obj.accountNumber);
    this.roleName = map(obj.roleName);
    this.externalId = map(obj.externalId);
  }
}

export default AwsAccount;

