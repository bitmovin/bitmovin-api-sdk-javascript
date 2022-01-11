import {map, mapArray} from '../common/Mapper';
import AwsCloudRegion from './AwsCloudRegion';
import Input from './Input';
import InputType from './InputType';

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
  public readonly type: InputType = InputType.S3;

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

  constructor(obj?: Partial<S3Input>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.cloudRegion = map(obj.cloudRegion);
    this.bucketName = map(obj.bucketName);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
  }
}

export default S3Input;

