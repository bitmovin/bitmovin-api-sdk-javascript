import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import GoogleCloudRegion from './GoogleCloudRegion';
import Output from './Output';

/**
 * @export
 * @class GcsOutput
 */
export default class GcsOutput extends Output {
  constructor(obj: any) {
    super(obj);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.bucketName = map(obj.bucketName);
    this.cloudRegion = map(obj.cloudRegion);
  }

  /**
   * GCS access key
   * @type {string}
   * @memberof GcsOutput
   */
  public accessKey: string;
  /**
   * GCS secret key
   * @type {string}
   * @memberof GcsOutput
   */
  public secretKey: string;
  /**
   * Name of the bucket
   * @type {string}
   * @memberof GcsOutput
   */
  public bucketName: string;
  /**
   * @type {GoogleCloudRegion}
   * @memberof GcsOutput
   */
  public cloudRegion?: GoogleCloudRegion;
}
