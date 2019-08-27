import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AwsAccount
 */
export class AwsAccount extends BitmovinResource {
  /**
   * Amazon access key (required)
   * @type {string}
   * @memberof AwsAccount
   */
  public accessKey?: string;

  /**
   * Amazon secret key (required)
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

  constructor(obj: Partial<AwsAccount>) {
    super(obj);

    this.accessKey = obj.accessKey;
    this.secretKey = obj.secretKey;
    this.accountNumber = obj.accountNumber;
  }
}

export default AwsAccount;

