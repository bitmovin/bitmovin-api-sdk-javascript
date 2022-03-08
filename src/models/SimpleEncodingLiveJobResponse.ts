import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveCloudRegion from './SimpleEncodingLiveCloudRegion';
import SimpleEncodingLiveJobInput from './SimpleEncodingLiveJobInput';
import SimpleEncodingLiveJobStatus from './SimpleEncodingLiveJobStatus';
import SimpleEncodingLiveJobUrlOutput from './SimpleEncodingLiveJobUrlOutput';
import SimpleEncodingVodJobErrors from './SimpleEncodingVodJobErrors';

/**
 * @export
 * @class SimpleEncodingLiveJobResponse
 */
export class SimpleEncodingLiveJobResponse {
  /**
   * The identifier of the Simple Encoding Live Job
   * @type {string}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public id?: string;

  /**
   * The current status of the Simple Encoding Live Job
   * @type {SimpleEncodingLiveJobStatus}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public status?: SimpleEncodingLiveJobStatus;

  /**
   * The identifier of the encoding that has been created based on the job request. This is only returned once the job execution has been successful and the encoding could be started. 
   * @type {string}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public encodingId?: string;

  /**
   * The IP address of the encoder for this job request. This is only returned once the job execution has been successful and the encoding could be started. Ingest is expected to be sent to this IP address. 
   * @type {string}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public encoderIp?: string;

  /**
   * Stream key of the live encoder
   * @type {string}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public streamKey?: string;

  /**
   * @type {SimpleEncodingLiveJobInput}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public input?: SimpleEncodingLiveJobInput;

  /**
   * @type {SimpleEncodingLiveJobUrlOutput[]}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public outputs?: SimpleEncodingLiveJobUrlOutput[];

  /**
   * Describes all the errors in cases the status of the job is 'error'.   TODO right now this is the same for VOD and LIVE? maybe rename the schema and use the same for both? 
   * @type {SimpleEncodingVodJobErrors[]}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public errors?: SimpleEncodingVodJobErrors[];

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public createdAt?: Date;

  /**
   * Modified timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ. The job is updated for example when the status changes
   * @type {Date}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public modifiedAt?: Date;

  /**
   * This property will be used for naming the encoding and the manifests.
   * @type {string}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public name?: string;

  /**
   * The cloud region that will be used for the live encoding
   * @type {SimpleEncodingLiveCloudRegion}
   * @memberof SimpleEncodingLiveJobResponse
   */
  public cloudRegion?: SimpleEncodingLiveCloudRegion;

  constructor(obj?: Partial<SimpleEncodingLiveJobResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.status = map(obj.status);
    this.encodingId = map(obj.encodingId);
    this.encoderIp = map(obj.encoderIp);
    this.streamKey = map(obj.streamKey);
    this.input = map(obj.input, SimpleEncodingLiveJobInput);
    this.outputs = mapArray(obj.outputs, SimpleEncodingLiveJobUrlOutput);
    this.errors = mapArray(obj.errors, SimpleEncodingVodJobErrors);
    this.createdAt = map(obj.createdAt, Date);
    this.modifiedAt = map(obj.modifiedAt, Date);
    this.name = map(obj.name);
    this.cloudRegion = map(obj.cloudRegion);
  }
}

export default SimpleEncodingLiveJobResponse;

