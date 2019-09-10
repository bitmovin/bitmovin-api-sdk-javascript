import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import GoogleCloudRegion from './GoogleCloudRegion';
import Output from './Output';
import OutputType from './OutputType';

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
  public type: OutputType.GCS = OutputType.GCS;

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

  constructor(obj?: Partial<GcsOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.bucketName = map(obj.bucketName);
    this.cloudRegion = map(obj.cloudRegion);
  }
}

export default GcsOutput;

