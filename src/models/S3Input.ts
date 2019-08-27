import {map} from '../common/Mapper';
import AwsCloudRegion from './AwsCloudRegion';
import Input from './Input';

/**
 * @export
 * @class S3Input
 */
export class S3Input extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof S3Input
   */
  public type: 'S3' = 'S3';

  /**
   * The cloud region in which the bucket is located. Is used to determine the ideal location for your encodings automatically.
   * @type {AwsCloudRegion}
   * @memberof S3Input
   */
  public cloudRegion?: AwsCloudRegion;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof S3Input
   */
  public bucketName?: string;

  /**
   * Amazon access key (required)
   * @type {string}
   * @memberof S3Input
   */
  public accessKey?: string;

  /**
   * Amazon secret key (required)
   * @type {string}
   * @memberof S3Input
   */
  public secretKey?: string;

  constructor(obj: Partial<S3Input>) {
    super(obj);

    this.cloudRegion = obj.cloudRegion;
    this.bucketName = obj.bucketName;
    this.accessKey = obj.accessKey;
    this.secretKey = obj.secretKey;
  }
}

export default S3Input;

