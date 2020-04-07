import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import GoogleCloudRegion from './GoogleCloudRegion';
import Output from './Output';
import OutputType from './OutputType';

/**
 * @export
 * @class GcsServiceAccountOutput
 */
export class GcsServiceAccountOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof GcsServiceAccountOutput
   */
  public type: OutputType.GCS_SERVICE_ACCOUNT = OutputType.GCS_SERVICE_ACCOUNT;

  /**
   * GCS projectId (required)
   * @type {string}
   * @memberof GcsServiceAccountOutput
   */
  public serviceAccountCredentials?: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof GcsServiceAccountOutput
   */
  public bucketName?: string;

  /**
   * @type {GoogleCloudRegion}
   * @memberof GcsServiceAccountOutput
   */
  public cloudRegion?: GoogleCloudRegion;

  constructor(obj?: Partial<GcsServiceAccountOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.serviceAccountCredentials = map(obj.serviceAccountCredentials);
    this.bucketName = map(obj.bucketName);
    this.cloudRegion = map(obj.cloudRegion);
  }
}

export default GcsServiceAccountOutput;

