import {map} from '../common/Mapper';
import AwsCloudRegion from './AwsCloudRegion';
import Input from './Input';

/**
 * @export
 * @class S3Input
 */
export default class S3Input extends Input {
  constructor(obj: any) {
    super(obj);
    this.cloudRegion = map(obj.cloudRegion);
    this.bucketName = map(obj.bucketName);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
  }

  /**
   * The cloud region in which the bucket is located. Is used to determine the ideal location for your encodings automatically.
   * @type {AwsCloudRegion}
   * @memberof S3Input
   */
  public cloudRegion?: AwsCloudRegion;
  /**
   * Name of the bucket
   * @type {string}
   * @memberof S3Input
   */
  public bucketName: string;
  /**
   * Amazon access key
   * @type {string}
   * @memberof S3Input
   */
  public accessKey: string;
  /**
   * Amazon secret key
   * @type {string}
   * @memberof S3Input
   */
  public secretKey: string;
}
