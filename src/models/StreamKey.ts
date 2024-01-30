import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import StreamKeyStatus from './StreamKeyStatus';
import StreamKeyType from './StreamKeyType';

/**
 * @export
 * @class StreamKey
 */
export class StreamKey extends BitmovinResource {
  /**
   * Stream key used for live streaming. This stream key is reserved and can be re-used with different live encodings. If this value is not provided, a unique random stream key will be generated. **Important:** This value has to be globally unique. If it is set manually, be sure to use a secure value. If the stream key value is guessed by others your live encoding can be compromised. 
   * @type {string}
   * @memberof StreamKey
   */
  public value?: string;

  /**
   * Status of the stream key
   * @type {StreamKeyStatus}
   * @memberof StreamKey
   */
  public status?: StreamKeyStatus;

  /**
   * Type of the stream key
   * @type {StreamKeyType}
   * @memberof StreamKey
   */
  public type?: StreamKeyType;

  /**
   * ID of the encoding that is assigned to this stream key. Not set if status is UNASSIGNED
   * @type {string}
   * @memberof StreamKey
   */
  public assignedEncodingId?: string;

  /**
   * ID of the ingest point that is assigned to this stream key. Not set if status is UNASSIGNED
   * @type {string}
   * @memberof StreamKey
   */
  public assignedIngestPointId?: string;

  constructor(obj?: Partial<StreamKey>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
    this.status = map(obj.status);
    this.type = map(obj.type);
    this.assignedEncodingId = map(obj.assignedEncodingId);
    this.assignedIngestPointId = map(obj.assignedIngestPointId);
  }
}

export default StreamKey;

