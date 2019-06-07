import {map} from '../common/Mapper';
import GoogleCloudRegion from './GoogleCloudRegion';
import Input from './Input';

/**
 * @export
 * @class GcsInput
 */
export class GcsInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.bucketName = map(obj.bucketName);
    this.cloudRegion = map(obj.cloudRegion);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
  }

  /**
   * Name of the bucket
   * @type {string}
   * @memberof GcsInput
   */
  public bucketName: string;
  /**
   * The cloud region in which the bucket is located. Is used to determine the ideal location for your encodings automatically.
   * @type {GoogleCloudRegion}
   * @memberof GcsInput
   */
  public cloudRegion?: GoogleCloudRegion;
  /**
   * GCS access key
   * @type {string}
   * @memberof GcsInput
   */
  public accessKey: string;
  /**
   * GCS secret key
   * @type {string}
   * @memberof GcsInput
   */
  public secretKey: string;
}

export default GcsInput;

