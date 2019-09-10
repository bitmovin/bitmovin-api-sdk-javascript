import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import AwsCloudRegion from './AwsCloudRegion';
import Output from './Output';
import OutputType from './OutputType';
import S3SignatureVersion from './S3SignatureVersion';

/**
 * @export
 * @class S3Output
 */
export class S3Output extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof S3Output
   */
  public type: OutputType.S3 = OutputType.S3;

  /**
   * Amazon S3 bucket name (required)
   * @type {string}
   * @memberof S3Output
   */
  public bucketName?: string;

  /**
   * Amazon S3 access key (required)
   * @type {string}
   * @memberof S3Output
   */
  public accessKey?: string;

  /**
   * Amazon S3 secret key (required)
   * @type {string}
   * @memberof S3Output
   */
  public secretKey?: string;

  /**
   * If set a user defined tag (x-amz-meta-) with that key will be used to store the MD5 hash of the file.
   * @type {string}
   * @memberof S3Output
   */
  public md5MetaTag?: string;

  /**
   * @type {AwsCloudRegion}
   * @memberof S3Output
   */
  public cloudRegion?: AwsCloudRegion;

  /**
   * @type {S3SignatureVersion}
   * @memberof S3Output
   */
  public signatureVersion?: S3SignatureVersion;

  constructor(obj?: Partial<S3Output>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.bucketName = map(obj.bucketName);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.md5MetaTag = map(obj.md5MetaTag);
    this.cloudRegion = map(obj.cloudRegion);
    this.signatureVersion = map(obj.signatureVersion);
  }
}

export default S3Output;

