import {map, mapArray} from '../common/Mapper';
import StreamsConfigResponse from './StreamsConfigResponse';
import StreamsLiveLifeCycle from './StreamsLiveLifeCycle';

/**
 * @export
 * @class StreamsLiveResponse
 */
export class StreamsLiveResponse {
  /**
   * The identifier of the stream
   * @type {string}
   * @memberof StreamsLiveResponse
   */
  public id?: string;

  /**
   * The streamKey of the stream
   * @type {string}
   * @memberof StreamsLiveResponse
   */
  public streamKey?: string;

  /**
   * The title of the stream
   * @type {string}
   * @memberof StreamsLiveResponse
   */
  public title?: string;

  /**
   * The description of the stream
   * @type {string}
   * @memberof StreamsLiveResponse
   */
  public description?: string;

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof StreamsLiveResponse
   */
  public createdAt?: Date;

  /**
   * The life cycle of the stream
   * @type {StreamsLiveLifeCycle}
   * @memberof StreamsLiveResponse
   */
  public lifeCycle?: StreamsLiveLifeCycle;

  /**
   * @type {StreamsConfigResponse}
   * @memberof StreamsLiveResponse
   */
  public config?: StreamsConfigResponse;

  constructor(obj?: Partial<StreamsLiveResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.streamKey = map(obj.streamKey);
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.createdAt = map(obj.createdAt, Date);
    this.lifeCycle = map(obj.lifeCycle);
    this.config = map(obj.config, StreamsConfigResponse);
  }
}

export default StreamsLiveResponse;

