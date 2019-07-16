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
   * GCS access key (required)
   * @type {string}
   * @memberof GcsOutput
   */
  public accessKey: string;

  /**
   * GCS secret key (required)
   * @type {string}
   * @memberof GcsOutput
   */
  public secretKey: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof GcsOutput
   */
  public bucketName: string;

  /**
   * @type {GoogleCloudRegion}
   * @memberof GcsOutput
   */
  public cloudRegion?: GoogleCloudRegion;

  constructor(obj: Partial<GcsOutput>) {
    super(obj);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.bucketName = map(obj.bucketName);
    this.cloudRegion = map(obj.cloudRegion);
  }
}

export default GcsOutput;

