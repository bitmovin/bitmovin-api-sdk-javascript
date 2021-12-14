import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobErrors from './SimpleEncodingVodJobErrors';
import SimpleEncodingVodJobStatus from './SimpleEncodingVodJobStatus';
import SimpleEncodingVodJobUrlInput from './SimpleEncodingVodJobUrlInput';
import SimpleEncodingVodJobUrlOutput from './SimpleEncodingVodJobUrlOutput';

/**
 * @export
 * @class SimpleEncodingVodJobResponse
 */
export class SimpleEncodingVodJobResponse {
  /**
   * The identifier of the Simple Encoding VOD Job
   * @type {string}
   * @memberof SimpleEncodingVodJobResponse
   */
  public id?: string;

  /**
   * The current status of the Simple Encoding VOD Job
   * @type {SimpleEncodingVodJobStatus}
   * @memberof SimpleEncodingVodJobResponse
   */
  public status?: SimpleEncodingVodJobStatus;

  /**
   * The identifier of the encoding that has been created based on the job request. This is only returned once the job execution has been successful and the encoding could be started. 
   * @type {string}
   * @memberof SimpleEncodingVodJobResponse
   */
  public encodingId?: string;

  /**
   * @type {SimpleEncodingVodJobUrlInput[]}
   * @memberof SimpleEncodingVodJobResponse
   */
  public inputs?: SimpleEncodingVodJobUrlInput[];

  /**
   * @type {SimpleEncodingVodJobUrlOutput[]}
   * @memberof SimpleEncodingVodJobResponse
   */
  public outputs?: SimpleEncodingVodJobUrlOutput[];

  /**
   * Describes all the errors in cases the status of the job is 'error'. 
   * @type {SimpleEncodingVodJobErrors[]}
   * @memberof SimpleEncodingVodJobResponse
   */
  public errors?: SimpleEncodingVodJobErrors[];

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof SimpleEncodingVodJobResponse
   */
  public createdAt?: Date;

  /**
   * Modified timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ. The job is updated for example when the status changes
   * @type {Date}
   * @memberof SimpleEncodingVodJobResponse
   */
  public modifiedAt?: Date;

  /**
   * This property will be used for naming the encoding and the manifests.
   * @type {string}
   * @memberof SimpleEncodingVodJobResponse
   */
  public name?: string;

  constructor(obj?: Partial<SimpleEncodingVodJobResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.status = map(obj.status);
    this.encodingId = map(obj.encodingId);
    this.inputs = mapArray(obj.inputs, SimpleEncodingVodJobUrlInput);
    this.outputs = mapArray(obj.outputs, SimpleEncodingVodJobUrlOutput);
    this.errors = mapArray(obj.errors, SimpleEncodingVodJobErrors);
    this.createdAt = map(obj.createdAt, Date);
    this.modifiedAt = map(obj.modifiedAt, Date);
    this.name = map(obj.name);
  }
}

export default SimpleEncodingVodJobResponse;

