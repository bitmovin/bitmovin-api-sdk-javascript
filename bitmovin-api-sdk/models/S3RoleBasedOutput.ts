import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import AwsCloudRegion from './AwsCloudRegion';
import Output from './Output';
import S3SignatureVersion from './S3SignatureVersion';

/**
 * @export
 * @class S3RoleBasedOutput
 */
export default class S3RoleBasedOutput extends Output {
  constructor(obj: any) {
    super(obj);
    this.bucketName = map(obj.bucketName);
    this.roleArn = map(obj.roleArn);
    this.md5MetaTag = map(obj.md5MetaTag);
    this.cloudRegion = map(obj.cloudRegion);
    this.signatureVersion = map(obj.signatureVersion);
  }

  /**
   * Amazon S3 bucket name
   * @type {string}
   * @memberof S3RoleBasedOutput
   */
  public bucketName: string;
  /**
   * Amazon ARN of the Role that will be assumed for S3 access.
   * @type {string}
   * @memberof S3RoleBasedOutput
   */
  public roleArn: string;
  /**
   * If set a user defined tag (x-amz-meta-) with that key will be used to store the MD5 hash of the file.
   * @type {string}
   * @memberof S3RoleBasedOutput
   */
  public md5MetaTag?: string;
  /**
   * @type {AwsCloudRegion}
   * @memberof S3RoleBasedOutput
   */
  public cloudRegion?: AwsCloudRegion;
  /**
   * Specifies the method used for authentication
   * @type {S3SignatureVersion}
   * @memberof S3RoleBasedOutput
   */
  public signatureVersion?: S3SignatureVersion;
}
