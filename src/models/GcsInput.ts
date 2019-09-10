import {map, mapArray} from '../common/Mapper';
import GoogleCloudRegion from './GoogleCloudRegion';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class GcsInput
 */
export class GcsInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof GcsInput
   */
  public type: InputType.GCS = InputType.GCS;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof GcsInput
   */
  public bucketName?: string;

  /**
   * The cloud region in which the bucket is located. Is used to determine the ideal location for your encodings automatically.
   * @type {GoogleCloudRegion}
   * @memberof GcsInput
   */
  public cloudRegion?: GoogleCloudRegion;

  /**
   * GCS access key (required)
   * @type {string}
   * @memberof GcsInput
   */
  public accessKey?: string;

  /**
   * GCS secret key (required)
   * @type {string}
   * @memberof GcsInput
   */
  public secretKey?: string;

  constructor(obj?: Partial<GcsInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.bucketName = map(obj.bucketName);
    this.cloudRegion = map(obj.cloudRegion);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
  }
}

export default GcsInput;

