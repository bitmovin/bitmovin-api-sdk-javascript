import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import ThumbnailUnit from './ThumbnailUnit';

/**
 * @export
 * @class Thumbnail
 */
export class Thumbnail extends BitmovinResource {
  /**
   * Height of the thumbnail. (required)
   * @type {number}
   * @memberof Thumbnail
   */
  public height?: number;

  /**
   *  Pattern which describes the thumbnail filenames. For example with thumbnail-%number%.png as pattern and 3 positions: thumbnail-3_0.png, thumbnail-5_0.png and thumbnail-25_5.png. (The number represents the position in the source video in seconds, in the previous example the first filename represents the thumbnail at 3s, the second one at 5s and the third one at 25.5s).
   * @type {string}
   * @memberof Thumbnail
   */
  public pattern?: string;

  /**
   * The interval in which to create thumbnails. In seconds (E.g. a value of 4 means create a thumbnail every 4 seconds). Mutually exclusive with positions/unit. Has to be equal to or greater than 1.
   * @type {number}
   * @memberof Thumbnail
   */
  public interval?: number;

  /**
   * Position in the unit where the thumbnail should be created from. Mutually exclusive with interval.
   * @type {number[]}
   * @memberof Thumbnail
   */
  public positions?: number[];

  /**
   * @type {EncodingOutput[]}
   * @memberof Thumbnail
   */
  public outputs?: EncodingOutput[];

  /**
   * Unit of the values in the positions array.
   * @type {ThumbnailUnit}
   * @memberof Thumbnail
   */
  public unit?: ThumbnailUnit;

  constructor(obj?: Partial<Thumbnail>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.height = map(obj.height);
    this.pattern = map(obj.pattern);
    this.interval = map(obj.interval);
    this.positions = mapArray(obj.positions);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
    this.unit = map(obj.unit);
  }
}

export default Thumbnail;

