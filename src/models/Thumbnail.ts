import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import ThumbnailUnit from './ThumbnailUnit';

/**
 * @export
 * @class Thumbnail
 */
export class Thumbnail extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.height = map(obj.height);
    this.pattern = map(obj.pattern);
    this.positions = map(obj.positions);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
    this.unit = map(obj.unit);
  }

  /**
   * Height of the thumbnail
   * @type {number}
   * @memberof Thumbnail
   */
  public height: number;
  /**
   *  Pattern which describes the thumbnail filenames. For example with thumbnail-%number%.png as pattern and 3 positions: thumbnail-3_0.png, thumbnail-5_0.png and thumbnail-25_5.png. (The number represents the position in the source video in seconds, in the previous example the first filename represents the thumbnail at 3s, the second one at 5s and the third one at 25.5s)
   * @type {string}
   * @memberof Thumbnail
   */
  public pattern?: string;
  /**
   * Position in the unit where the thumbnail should be created from.
   * @type {Array<number>}
   * @memberof Thumbnail
   */
  public positions: Array<number>;
  /**
   * @type {Array<EncodingOutput>}
   * @memberof Thumbnail
   */
  public outputs?: Array<EncodingOutput>;
  /**
   * @type {ThumbnailUnit}
   * @memberof Thumbnail
   */
  public unit?: ThumbnailUnit;
}

export default Thumbnail;

