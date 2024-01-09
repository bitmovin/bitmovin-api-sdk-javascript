import {map, mapArray} from '../common/Mapper';
import StreamsLiveResponse from './StreamsLiveResponse';
import StreamsType from './StreamsType';
import StreamsVideoResponse from './StreamsVideoResponse';

export type StreamsResponseUnion =
  StreamsVideoResponse |
  StreamsLiveResponse;

/**
 * @export
 * @class StreamsResponse
 */
export class StreamsResponse {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof StreamsType]: string; } = {
    VIDEO: 'StreamsVideoResponse',
    LIVE: 'StreamsLiveResponse'
  };

  /**
   * The identifier of the stream
   * @type {string}
   * @memberof StreamsResponse
   */
  public id?: string;

  /**
   * The title of the stream
   * @type {string}
   * @memberof StreamsResponse
   */
  public title?: string;

  /**
   * The description of the stream
   * @type {string}
   * @memberof StreamsResponse
   */
  public description?: string;

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof StreamsResponse
   */
  public createdAt?: Date;

  /**
   * Type of the Stream contained in the StreamsResponse
   * @type {StreamsType}
   * @memberof StreamsResponse
   */
  public type?: StreamsType;

  constructor(obj?: Partial<StreamsResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.createdAt = map(obj.createdAt, Date);
    this.type = map(obj.type);
  }
}

export default StreamsResponse;

