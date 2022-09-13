import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class CreateBitmovinStreamRequest
 */
export class CreateBitmovinStreamRequest {
  /**
   * The Streams input asset URL
   * @type {string}
   * @memberof CreateBitmovinStreamRequest
   */
  public assetUrl?: string;

  /**
   * Title of the Stream
   * @type {string}
   * @memberof CreateBitmovinStreamRequest
   */
  public title?: string;

  /**
   * Description of the Stream
   * @type {string}
   * @memberof CreateBitmovinStreamRequest
   */
  public description?: string;

  constructor(obj?: Partial<CreateBitmovinStreamRequest>) {
    if(!obj) {
      return;
    }
    this.assetUrl = map(obj.assetUrl);
    this.title = map(obj.title);
    this.description = map(obj.description);
  }
}

export default CreateBitmovinStreamRequest;

