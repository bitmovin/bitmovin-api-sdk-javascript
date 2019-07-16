import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import S3SignatureVersion from './S3SignatureVersion';

/**
 * @export
 * @class GenericS3Output
 */
export class GenericS3Output extends Output {
  /**
   * Your generic S3 access key (required)
   * @type {string}
   * @memberof GenericS3Output
   */
  public accessKey: string;

  /**
   * Your generic S3 secret key (required)
   * @type {string}
   * @memberof GenericS3Output
   */
  public secretKey: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof GenericS3Output
   */
  public bucketName: string;

  /**
   * The Generic S3 server hostname (or IP address) (required)
   * @type {string}
   * @memberof GenericS3Output
   */
  public host: string;

  /**
   * The port on which the Generic S3 server is running on (if not provided 8000 will be used)
   * @type {number}
   * @memberof GenericS3Output
   */
  public port?: number;

  /**
   * Controls whether SSL is used or not
   * @type {boolean}
   * @memberof GenericS3Output
   */
  public ssl?: boolean;

  /**
   * Specifies the method used for authentication
   * @type {S3SignatureVersion}
   * @memberof GenericS3Output
   */
  public signatureVersion?: S3SignatureVersion;

  constructor(obj: Partial<GenericS3Output>) {
    super(obj);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.bucketName = map(obj.bucketName);
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.ssl = map(obj.ssl);
    this.signatureVersion = map(obj.signatureVersion);
  }
}

export default GenericS3Output;

