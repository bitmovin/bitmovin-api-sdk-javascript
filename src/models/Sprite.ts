import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import SpriteUnit from './SpriteUnit';

/**
 * @export
 * @class Sprite
 */
export class Sprite extends BitmovinResource {
  /**
   * Height of one thumbnail (required)
   * @type {number}
   * @memberof Sprite
   */
  public height?: number;

  /**
   * Width of one thumbnail (required)
   * @type {number}
   * @memberof Sprite
   */
  public width?: number;

  /**
   * @type {SpriteUnit}
   * @memberof Sprite
   */
  public unit?: SpriteUnit;

  /**
   * Distance in the given unit between a screenshot
   * @type {number}
   * @memberof Sprite
   */
  public distance?: number;

  /**
   * Name of the sprite image. File extension \".jpg\" or \".png\" is required. (required)
   * @type {string}
   * @memberof Sprite
   */
  public spriteName?: string;

  /**
   * Filename of the sprite image. If not set, spriteName will be used, but without an extension.
   * @type {string}
   * @memberof Sprite
   */
  public filename?: string;

  /**
   * Filename of the vtt-file. The file-extension \".vtt\" is required. (required)
   * @type {string}
   * @memberof Sprite
   */
  public vttName?: string;

  /**
   * @type {EncodingOutput[]}
   * @memberof Sprite
   */
  public outputs?: EncodingOutput[];

  /**
   * Number of images per file. If more images are generated than specified in this value, multiple sprites will be created. You can use the placeholder '%number%' in the spriteName to specify the naming policy.
   * @type {number}
   * @memberof Sprite
   */
  public imagesPerFile?: number;

  constructor(obj?: Partial<Sprite>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.height = map(obj.height);
    this.width = map(obj.width);
    this.unit = map(obj.unit);
    this.distance = map(obj.distance);
    this.spriteName = map(obj.spriteName);
    this.filename = map(obj.filename);
    this.vttName = map(obj.vttName);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
    this.imagesPerFile = map(obj.imagesPerFile);
  }
}

export default Sprite;

