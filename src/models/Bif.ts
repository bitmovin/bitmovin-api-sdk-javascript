import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import ThumbnailAspectMode from './ThumbnailAspectMode';

/**
 * Either height or width is required. It is also possible to set both properties.
 * @export
 * @class Bif
 */
export class Bif extends BitmovinResource {
  /**
   * Height of one thumbnail
   * @type {number}
   * @memberof Bif
   */
  public height?: number;

  /**
   * Width of one thumbnail. Roku recommends a width of 240 for SD and 320 for HD.
   * @type {number}
   * @memberof Bif
   */
  public width?: number;

  /**
   * Distance in seconds between a screenshot (required)
   * @type {number}
   * @memberof Bif
   */
  public distance?: number;

  /**
   * Filename of the Bif image. (required)
   * @type {string}
   * @memberof Bif
   */
  public filename?: string;

  /**
   * @type {EncodingOutput[]}
   * @memberof Bif
   */
  public outputs?: EncodingOutput[];

  /**
   * Specifies the aspect mode that is used when both height and width are specified Only supported starting with encoder version `2.85.0`. 
   * @type {ThumbnailAspectMode}
   * @memberof Bif
   */
  public aspectMode?: ThumbnailAspectMode;

  constructor(obj?: Partial<Bif>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.height = map(obj.height);
    this.width = map(obj.width);
    this.distance = map(obj.distance);
    this.filename = map(obj.filename);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
    this.aspectMode = map(obj.aspectMode);
  }
}

export default Bif;

