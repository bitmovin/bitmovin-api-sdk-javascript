import {map, mapArray} from '../common/Mapper';
import BitmovinStreamEncodingTask from './BitmovinStreamEncodingTask';
import BitmovinStreamQuality from './BitmovinStreamQuality';
import BitmovinStreamStatus from './BitmovinStreamStatus';

/**
 * @export
 * @class BitmovinStreamResponse
 */
export class BitmovinStreamResponse {
  /**
   * The identifier of the Stream
   * @type {string}
   * @memberof BitmovinStreamResponse
   */
  public id?: string;

  /**
   * The asset URL of the Stream
   * @type {string}
   * @memberof BitmovinStreamResponse
   */
  public assetUrl?: string;

  /**
   * The title of the Stream
   * @type {string}
   * @memberof BitmovinStreamResponse
   */
  public title?: string;

  /**
   * The description of the Stream
   * @type {string}
   * @memberof BitmovinStreamResponse
   */
  public description?: string;

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof BitmovinStreamResponse
   */
  public createdAt?: Date;

  /**
   * The status of the Stream
   * @type {BitmovinStreamStatus}
   * @memberof BitmovinStreamResponse
   */
  public status?: BitmovinStreamStatus;

  /**
   * The target quality of the Stream (OBSOLETE!)
   * @type {BitmovinStreamQuality}
   * @memberof BitmovinStreamResponse
   */
  public targetQuality?: BitmovinStreamQuality;

  /**
   * List of available stream qualities (OBSOLETE!)
   * @type {BitmovinStreamQuality[]}
   * @memberof BitmovinStreamResponse
   */
  public availableQualities?: BitmovinStreamQuality[];

  /**
   * List of encoding status information
   * @type {BitmovinStreamEncodingTask[]}
   * @memberof BitmovinStreamResponse
   */
  public encodingTasks?: BitmovinStreamEncodingTask[];

  constructor(obj?: Partial<BitmovinStreamResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.assetUrl = map(obj.assetUrl);
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.createdAt = map(obj.createdAt, Date);
    this.status = map(obj.status);
    this.targetQuality = map(obj.targetQuality);
    this.availableQualities = mapArray(obj.availableQualities);
    this.encodingTasks = mapArray(obj.encodingTasks, BitmovinStreamEncodingTask);
  }
}

export default BitmovinStreamResponse;

