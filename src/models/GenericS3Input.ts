import {map} from '../common/Mapper';
import Input from './Input';
import S3SignatureVersion from './S3SignatureVersion';

/**
 * @export
 * @class GenericS3Input
 */
export class GenericS3Input extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof GenericS3Input
   */
  public type: 'GENERIC_S3' = 'GENERIC_S3';

  /**
   * Your generic S3 bucket name (required)
   * @type {string}
   * @memberof GenericS3Input
   */
  public bucketName?: string;

  /**
   * The generic S3 server hostname (or IP address) (required)
   * @type {string}
   * @memberof GenericS3Input
   */
  public host?: string;

  /**
   * The port on which the generic S3 server is running on (if not provided 8000 will be used)
   * @type {number}
   * @memberof GenericS3Input
   */
  public port?: number;

  /**
   * Controls whether SSL is used or not
   * @type {boolean}
   * @memberof GenericS3Input
   */
  public ssl?: boolean;

  /**
   * Specifies the method used for authentication
   * @type {S3SignatureVersion}
   * @memberof GenericS3Input
   */
  public signatureVersion?: S3SignatureVersion;

  /**
   * Your generic S3 access key (required)
   * @type {string}
   * @memberof GenericS3Input
   */
  public accessKey?: string;

  /**
   * Your generic S3 secret key (required)
   * @type {string}
   * @memberof GenericS3Input
   */
  public secretKey?: string;

  constructor(obj: Partial<GenericS3Input>) {
    super(obj);

    this.bucketName = obj.bucketName;
    this.host = obj.host;
    this.port = obj.port;
    this.ssl = obj.ssl;
    this.signatureVersion = obj.signatureVersion;
    this.accessKey = obj.accessKey;
    this.secretKey = obj.secretKey;
  }
}

export default GenericS3Input;

