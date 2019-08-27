import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import GoogleCloudRegion from './GoogleCloudRegion';
import Output from './Output';

/**
 * @export
 * @class GcsOutput
 */
export class GcsOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof GcsOutput
   */
  public type: 'GCS' = 'GCS';

  /**
   * GCS access key (required)
   * @type {string}
   * @memberof GcsOutput
   */
  public accessKey?: string;

  /**
   * GCS secret key (required)
   * @type {string}
   * @memberof GcsOutput
   */
  public secretKey?: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof GcsOutput
   */
  public bucketName?: string;

  /**
   * @type {GoogleCloudRegion}
   * @memberof GcsOutput
   */
  public cloudRegion?: GoogleCloudRegion;

  constructor(obj: Partial<GcsOutput>) {
    super(obj);

    this.accessKey = obj.accessKey;
    this.secretKey = obj.secretKey;
    this.bucketName = obj.bucketName;
    this.cloudRegion = obj.cloudRegion;
  }
}

export default GcsOutput;

