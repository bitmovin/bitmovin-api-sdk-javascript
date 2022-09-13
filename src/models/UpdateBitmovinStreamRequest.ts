import {map, mapArray} from '../common/Mapper';
import BitmovinStreamStatus from './BitmovinStreamStatus';

/**
 * @export
 * @class UpdateBitmovinStreamRequest
 */
export class UpdateBitmovinStreamRequest {
  /**
   * The status of the Stream
   * @type {BitmovinStreamStatus}
   * @memberof UpdateBitmovinStreamRequest
   */
  public status?: BitmovinStreamStatus;

  /**
   * Title of the Stream
   * @type {string}
   * @memberof UpdateBitmovinStreamRequest
   */
  public title?: string;

  /**
   * Description of the Stream
   * @type {string}
   * @memberof UpdateBitmovinStreamRequest
   */
  public description?: string;

  constructor(obj?: Partial<UpdateBitmovinStreamRequest>) {
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.title = map(obj.title);
    this.description = map(obj.description);
  }
}

export default UpdateBitmovinStreamRequest;

