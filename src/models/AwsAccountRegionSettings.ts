import {map, mapArray} from '../common/Mapper';
import AwsCloudRegion from './AwsCloudRegion';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AwsAccountRegionSettings
 */
export class AwsAccountRegionSettings extends BitmovinResource {
  /**
   * Limit for the amount of running encodings at a time. Leave empty for no limit.
   * @type {number}
   * @memberof AwsAccountRegionSettings
   */
  public limitParallelEncodings?: number;

  /**
   * Id of the security group for encoding instances (required)
   * @type {string}
   * @memberof AwsAccountRegionSettings
   */
  public securityGroupId?: string;

  /**
   * Id of the subnet for encoding instances (required)
   * @type {string}
   * @memberof AwsAccountRegionSettings
   */
  public subnetId?: string;

  /**
   * Custom SSH port. Valid values: 1 - 65535. Leave empty if the default SSH port 22 is OK.
   * @type {number}
   * @memberof AwsAccountRegionSettings
   */
  public sshPort?: number;

  /**
   * @type {AwsCloudRegion}
   * @memberof AwsAccountRegionSettings
   */
  public region?: AwsCloudRegion;

  constructor(obj?: Partial<AwsAccountRegionSettings>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.limitParallelEncodings = map(obj.limitParallelEncodings);
    this.securityGroupId = map(obj.securityGroupId);
    this.subnetId = map(obj.subnetId);
    this.sshPort = map(obj.sshPort);
    this.region = map(obj.region);
  }
}

export default AwsAccountRegionSettings;

