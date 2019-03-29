import {map} from '../common/Mapper';
import Input from './Input';
import S3SignatureVersion from './S3SignatureVersion';

/**
 * @export
 * @class GenericS3Input
 */
export default class GenericS3Input extends Input {
  constructor(obj: any) {
    super(obj);
    this.bucketName = map(obj.bucketName);
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.ssl = map(obj.ssl);
    this.signatureVersion = map(obj.signatureVersion);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
  }

  /**
   * Your generic S3 bucket name
   * @type {string}
   * @memberof GenericS3Input
   */
  public bucketName: string;
  /**
   * The generic S3 server hostname (or IP address)
   * @type {string}
   * @memberof GenericS3Input
   */
  public host: string;
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
   * Your generic S3 access key
   * @type {string}
   * @memberof GenericS3Input
   */
  public accessKey: string;
  /**
   * Your generic S3 secret key
   * @type {string}
   * @memberof GenericS3Input
   */
  public secretKey: string;
}
