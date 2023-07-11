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
   * Id of the style config to use
   * @type {string}
   * @memberof StreamsVideoUpdateRequest
   */
  public styleConfigId?: string;

  /**
   * URL to hosted poster image
   * @type {string}
   * @memberof StreamsVideoUpdateRequest
   */
  public posterUrl?: string;

  /**
   * Id of the advertisement config to use
   * @type {string}
   * @memberof StreamsVideoUpdateRequest
   */
  public adConfigId?: string;

  /**
   * Id of the content protection config to use
   * @type {string}
   * @memberof StreamsVideoUpdateRequest
   */
  public contentProtectionId?: string;

  constructor(obj?: Partial<StreamsVideoUpdateRequest>) {
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.title = map(obj.title);
    this.description = map(obj.description);
    this.styleConfigId = map(obj.styleConfigId);
    this.posterUrl = map(obj.posterUrl);
    this.adConfigId = map(obj.adConfigId);
    this.contentProtectionId = map(obj.contentProtectionId);
  }
}

export default StreamsVideoUpdateRequest;

