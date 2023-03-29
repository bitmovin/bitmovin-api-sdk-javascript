import {map, mapArray} from '../common/Mapper';
import StreamsConfigResponse from './StreamsConfigResponse';
import StreamsVideoEncodingTask from './StreamsVideoEncodingTask';
import StreamsVideoStatus from './StreamsVideoStatus';

/**
 * @export
 * @class StreamsVideoResponse
 */
export class StreamsVideoResponse {
  /**
   * The identifier of the stream
   * @type {string}
   * @memberof StreamsVideoResponse
   */
  public id?: string;

  /**
   * The asset URL of the stream
   * @type {string}
   * @memberof StreamsVideoResponse
   */
  public assetUrl?: string;

  /**
   * The title of the stream
   * @type {string}
   * @memberof StreamsVideoResponse
   */
  public title?: string;

  /**
   * The description of the stream
   * @type {string}
   * @memberof StreamsVideoResponse
   */
  public description?: string;

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof StreamsVideoResponse
   */
  public createdAt?: Date;

  /**
   * The status of the stream
   * @type {StreamsVideoStatus}
   * @memberof StreamsVideoResponse
   */
  public status?: StreamsVideoStatus;

  /**
   * @type {StreamsConfigResponse}
   * @memberof StreamsVideoResponse
   */
  public config?: StreamsConfigResponse;

  /**
   * List of encoding status information
   * @type {StreamsVideoEncodingTask[]}
   * @memberof StreamsVideoResponse
   */
  public encodingTasks?: StreamsVideoEncodingTask[];

  constructor(obj?: Partial<StreamsVideoResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.assetUrl = map(obj.assetUrl);
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.createdAt = map(obj.createdAt, Date);
    this.status = map(obj.status);
    this.config = map(obj.config, StreamsConfigResponse);
    this.encodingTasks = mapArray(obj.encodingTasks, StreamsVideoEncodingTask);
  }
}

export default StreamsVideoResponse;

