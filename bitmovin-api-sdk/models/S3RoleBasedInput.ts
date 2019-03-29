import {map} from '../common/Mapper';
import AwsCloudRegion from './AwsCloudRegion';
import Input from './Input';

/**
 * @export
 * @class S3RoleBasedInput
 */
export default class S3RoleBasedInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.bucketName = map(obj.bucketName);
    this.roleArn = map(obj.roleArn);
    this.cloudRegion = map(obj.cloudRegion);
  }

  /**
   * Amazon S3 bucket name
   * @type {string}
   * @memberof S3RoleBasedInput
   */
  public bucketName: string;
  /**
   * Amazon ARN of the Role that will be assumed for S3 access.
   * @type {string}
   * @memberof S3RoleBasedInput
   */
  public roleArn: string;
  /**
   * @type {AwsCloudRegion}
   * @memberof S3RoleBasedInput
   */
  public cloudRegion?: AwsCloudRegion;
}
