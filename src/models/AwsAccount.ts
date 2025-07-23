import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AwsAccount
 */
export class AwsAccount extends BitmovinResource {
  /**
   * Deprecated: Amazon access key for legacy support. Use `roleName` instead
   * @type {string}
   * @memberof AwsAccount
   */
  public accessKey?: string;

  /**
   * Deprecated: Amazon secret key for legacy support. Use `roleName` instead
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
   * Role name including path for the AWS IAM role that will be used by Bitmovin to access the AWS account depicted by `accountNumber`. The role ARN is constructed based on `accountNumber` and `roleName`: `arn:aws:iam::{accountNumber}:role/{roleName}`.  For details on how to create the AWS IAM role in your account, please refer to the [AWS cloud connect setup guide](https://developer.bitmovin.com/encoding/docs/using-bitmovin-cloud-connect-with-aws). 
   * @type {string}
   * @memberof AwsAccount
   */
  public roleName?: string;

  /**
   * External ID that needs to be set in the trust policy of the AWS IAM role (depicted by `roleName`) that allows Bitmovin access to the AWS account depicted by `accountNumber`
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

