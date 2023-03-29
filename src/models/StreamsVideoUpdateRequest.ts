import {map, mapArray} from '../common/Mapper';
import StreamsVideoStatus from './StreamsVideoStatus';

/**
 * @export
 * @class StreamsVideoUpdateRequest
 */
export class StreamsVideoUpdateRequest {
  /**
   * The new status of the stream
   * @type {StreamsVideoStatus}
   * @memberof StreamsVideoUpdateRequest
   */
  public status?: StreamsVideoStatus;

  /**
   * The new title of the stream
   * @type {string}
   * @memberof StreamsVideoUpdateRequest
   */
  public title?: string;

  /**
   * The new description of the stream
   * @type {string}
   * @memberof StreamsVideoUpdateRequest
   */
  public description?: string;

  /**
   * Id of the stream config to use
   * @type {string}
   * @memberof StreamsVideoUpdateRequest
   */
  public configId?: string;

  constructor(obj?: Partial<StreamsVideoUpdateRequest>) {
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.configId = map(obj.configId);
  }
}

export default StreamsVideoUpdateRequest;

