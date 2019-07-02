import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AwsAccount
 */
export class AwsAccount extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.accountNumber = map(obj.accountNumber);
  }

  /**
   * Amazon access key (required)
   * @type {string}
   * @memberof AwsAccount
   */
  public accessKey: string;
  /**
   * Amazon secret key (required)
   * @type {string}
   * @memberof AwsAccount
   */
  public secretKey: string;
  /**
   * Amazon account number (12 digits as per AWS spec) (required)
   * @type {string}
   * @memberof AwsAccount
   */
  public accountNumber: string;
}

export default AwsAccount;

