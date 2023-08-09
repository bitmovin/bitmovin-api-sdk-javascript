import {map, mapArray} from '../common/Mapper';
import StreamsType from './StreamsType';

/**
 * @export
 * @class StreamsSearchResponse
 */
export class StreamsSearchResponse {
  /**
   * The identifier of the stream
   * @type {string}
   * @memberof StreamsSearchResponse
   */
  public id?: string;

  /**
   * The title of the stream
   * @type {string}
   * @memberof StreamsSearchResponse
   */
  public title?: string;

  /**
   * The description of the stream
   * @type {string}
   * @memberof StreamsSearchResponse
   */
  public description?: string;

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof StreamsSearchResponse
   */
  public createdAt?: Date;

  /**
   * The type the stream
   * @type {StreamsType}
   * @memberof StreamsSearchResponse
   */
  public type?: StreamsType;

  constructor(obj?: Partial<StreamsSearchResponse>) {
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

export default StreamsSearchResponse;

