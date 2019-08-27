import {map} from '../common/Mapper';
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
   * Maximum amount of encoding coordinators and workers allowed in this region at any time. Leave empty for no limit.
   * @type {number}
   * @memberof AwsAccountRegionSettings
   */
  public maximumAmountOfCoordinatorsAndWorkersInRegion?: number;

  /**
   * Limit the amount of money to spend in this region on this account. Leave empty for no limit.
   * @type {number}
   * @memberof AwsAccountRegionSettings
   */
  public maxMoneyToSpendPerMonth?: number;

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
   * Which machine types are allowed to be deployed. Leave empty for no machine type restrictions.
   * @type {string[]}
   * @memberof AwsAccountRegionSettings
   */
  public machineTypes?: string[];

  /**
   * Custom SSH port. Valid values: 1 - 65535. Leave empty if the default SSH port 22 is OK.
   * @type {number}
   * @memberof AwsAccountRegionSettings
   */
  public sshPort?: number;

  constructor(obj: Partial<AwsAccountRegionSettings>) {
    super(obj);

    this.limitParallelEncodings = obj.limitParallelEncodings;
    this.maximumAmountOfCoordinatorsAndWorkersInRegion = obj.maximumAmountOfCoordinatorsAndWorkersInRegion;
    this.maxMoneyToSpendPerMonth = obj.maxMoneyToSpendPerMonth;
    this.securityGroupId = obj.securityGroupId;
    this.subnetId = obj.subnetId;
    this.machineTypes = obj.machineTypes || [];
    this.sshPort = obj.sshPort;
  }
}

export default AwsAccountRegionSettings;

