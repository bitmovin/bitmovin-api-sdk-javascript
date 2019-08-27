import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';

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
   * Distance in seconds between a screenshot
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

  constructor(obj: Partial<Bif>) {
    super(obj);

    this.height = obj.height;
    this.width = obj.width;
    this.distance = obj.distance;
    this.filename = obj.filename;
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput) || [];
  }
}

export default Bif;

