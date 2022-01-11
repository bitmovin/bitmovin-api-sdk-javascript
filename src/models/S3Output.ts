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
  public readonly type: OutputType = OutputType.S3;

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
   * The cloud region in which the bucket is located. Is used to determine the ideal location for your encodings automatically.
   * @type {AwsCloudRegion}
   * @memberof S3Output
   */
  public cloudRegion?: AwsCloudRegion;

  /**
   * Specifies the method used for authentication. Must be set to S3_V2 if the region supports both V2 and V4, but the bucket allows V2 only (see https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region)
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

