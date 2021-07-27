import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import AnalyticsOutput from './AnalyticsOutput';
import AnalyticsOutputType from './AnalyticsOutputType';
import GoogleCloudRegion from './GoogleCloudRegion';

/**
 * @export
 * @class AnalyticsGcsServiceAccountOutput
 */
export class AnalyticsGcsServiceAccountOutput extends AnalyticsOutput {
  /**
   * Discriminator property for AnalyticsOutput
   * @type {string}
   * @memberof AnalyticsGcsServiceAccountOutput
   */
  public type: AnalyticsOutputType.GCS_SERVICE_ACCOUNT = AnalyticsOutputType.GCS_SERVICE_ACCOUNT;

  /**
   * GCS projectId (required)
   * @type {string}
   * @memberof AnalyticsGcsServiceAccountOutput
   */
  public serviceAccountCredentials?: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof AnalyticsGcsServiceAccountOutput
   */
  public bucketName?: string;

  /**
   * The cloud region in which the bucket is located. Is used to determine the ideal location for your encodings automatically.
   * @type {GoogleCloudRegion}
   * @memberof AnalyticsGcsServiceAccountOutput
   */
  public cloudRegion?: GoogleCloudRegion;

  constructor(obj?: Partial<AnalyticsGcsServiceAccountOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.serviceAccountCredentials = map(obj.serviceAccountCredentials);
    this.bucketName = map(obj.bucketName);
    this.cloudRegion = map(obj.cloudRegion);
  }
}

export default AnalyticsGcsServiceAccountOutput;

