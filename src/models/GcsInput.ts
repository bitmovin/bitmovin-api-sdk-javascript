import {map} from '../common/Mapper';
import GoogleCloudRegion from './GoogleCloudRegion';
import Input from './Input';

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
  public type: 'GCS' = 'GCS';

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

  constructor(obj: Partial<GcsInput>) {
    super(obj);

    this.bucketName = obj.bucketName;
    this.cloudRegion = obj.cloudRegion;
    this.accessKey = obj.accessKey;
    this.secretKey = obj.secretKey;
  }
}

export default GcsInput;

