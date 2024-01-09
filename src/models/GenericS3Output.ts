import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import OutputType from './OutputType';
import S3AccessStyle from './S3AccessStyle';
import S3SignatureVersion from './S3SignatureVersion';

/**
 * @export
 * @class GenericS3Output
 */
export class GenericS3Output extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof GenericS3Output
   */
  public readonly type: OutputType = OutputType.GENERIC_S3;

  /**
   * Your generic S3 access key (required)
   * @type {string}
   * @memberof GenericS3Output
   */
  public accessKey?: string;

  /**
   * Your generic S3 secret key (required)
   * @type {string}
   * @memberof GenericS3Output
   */
  public secretKey?: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof GenericS3Output
   */
  public bucketName?: string;

  /**
   * The Generic S3 server hostname (or IP address) (required)
   * @type {string}
   * @memberof GenericS3Output
   */
  public host?: string;

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
   * The signing region to use
   * @type {string}
   * @memberof GenericS3Output
   */
  public signingRegion?: string;

  /**
   * Specifies the method used for authentication
   * @type {S3SignatureVersion}
   * @memberof GenericS3Output
   */
  public signatureVersion?: S3SignatureVersion;

  /**
   * Specifies the URL access style to use
   * @type {S3AccessStyle}
   * @memberof GenericS3Output
   */
  public accessStyle?: S3AccessStyle;

  constructor(obj?: Partial<GenericS3Output>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.bucketName = map(obj.bucketName);
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.ssl = map(obj.ssl);
    this.signingRegion = map(obj.signingRegion);
    this.signatureVersion = map(obj.signatureVersion);
    this.accessStyle = map(obj.accessStyle);
  }
}

export default GenericS3Output;

