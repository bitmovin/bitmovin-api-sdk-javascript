import {map, mapArray} from '../common/Mapper';
import GoogleCloudRegion from './GoogleCloudRegion';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class GcsServiceAccountInput
 */
export class GcsServiceAccountInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof GcsServiceAccountInput
   */
  public type: InputType.GCS_SERVICE_ACCOUNT = InputType.GCS_SERVICE_ACCOUNT;

  /**
   * GCS projectId (required)
   * @type {string}
   * @memberof GcsServiceAccountInput
   */
  public serviceAccountCredentials?: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof GcsServiceAccountInput
   */
  public bucketName?: string;

  /**
   * The cloud region in which the bucket is located. Is used to determine the ideal location for your encodings automatically.
   * @type {GoogleCloudRegion}
   * @memberof GcsServiceAccountInput
   */
  public cloudRegion?: GoogleCloudRegion;

  constructor(obj?: Partial<GcsServiceAccountInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.serviceAccountCredentials = map(obj.serviceAccountCredentials);
    this.bucketName = map(obj.bucketName);
    this.cloudRegion = map(obj.cloudRegion);
  }
}

export default GcsServiceAccountInput;

