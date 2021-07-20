import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import SpriteCreationMode from './SpriteCreationMode';
import SpriteJpegConfig from './SpriteJpegConfig';
import SpriteUnit from './SpriteUnit';
import ThumbnailAspectMode from './ThumbnailAspectMode';

/**
 * @export
 * @class Sprite
 */
export class Sprite extends BitmovinResource {
  /**
   * Height of one thumbnail, either height or width are required fields. If only one is given the encoder will calculate the other way value based on the aspect ratio of the video file. If the encoder version is below 2.83.0 both are required 
   * @type {number}
   * @memberof Sprite
   */
  public height?: number;

  /**
   * Width of one thumbnail, either height or width are required fields. If only one is given the encoder will calculate the other way value based on the aspect ratio of the video file. If the encoder version is below 2.83.0 both are required 
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
   * Name of the sprite image. File extension \".jpg\"/\".jpeg\" or \".png\" is required. (required)
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
   * Filename of the vtt-file. The file-extension \".vtt\" is required.
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
   * Number of images per file. If more images are generated than specified in this value, multiple sprites will be created. You can use the placeholder '%number%' in the spriteName to specify the naming policy. Either this property must be set or hTiles and vTiles. 
   * @type {number}
   * @memberof Sprite
   */
  public imagesPerFile?: number;

  /**
   * Number of rows of images per file.  Has to be set together with vTiles. If this property and vTiles are set, the imagesPerFile property must not be set.  It is recommended to use the placeholder '%number%' in the spriteName to allow the generation of multiple sprites.  Only supported starting with encoder version `2.76.0`. 
   * @type {number}
   * @memberof Sprite
   */
  public hTiles?: number;

  /**
   * Number of columns of images per file.  Has to be set together with hTiles. If this property and hTiles are set, the imagesPerFile property must not be set.  It is recommended to use the placeholder '%number%' in the spriteName to allow the generation of multiple sprites.  Only supported starting with encoder version `2.76.0`. 
   * @type {number}
   * @memberof Sprite
   */
  public vTiles?: number;

  /**
   * Additional configuration for JPEG sprite generation.  If this property is set the extension of the file must be '.jpg.' or '.jpeg'  Only supported starting with encoder version `2.76.0` 
   * @type {SpriteJpegConfig}
   * @memberof Sprite
   */
  public jpegConfig?: SpriteJpegConfig;

  /**
   * The creation mode for the thumbnails in the Sprite.  Two possible creation modes exist: generate thumbnails starting with the beginning of the video or after the first configured period.  When using distance=10 and unit=SECONDS and INTERVAL_END, the first image of the sprite is from the second 10 of the video. When using distance=10 and unit=SECONDS and INTERVAL_START, the first image of the sprite is from the very start of the video, while the second image is from second 10 of the video.  It is recommended to use 'INTERVAL_START' when using the sprites for trick play so that there is an additional thumbnail from the beginning of the video.  Only supported starting with encoder version `2.76.0`. 
   * @type {SpriteCreationMode}
   * @memberof Sprite
   */
  public creationMode?: SpriteCreationMode;

  /**
   * Specifies the aspect mode that is used when both height and width are specified Only supported starting with encoder version `2.85.0`. 
   * @type {ThumbnailAspectMode}
   * @memberof Sprite
   */
  public aspectMode?: ThumbnailAspectMode;

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
    this.hTiles = map(obj.hTiles);
    this.vTiles = map(obj.vTiles);
    this.jpegConfig = map(obj.jpegConfig, SpriteJpegConfig);
    this.creationMode = map(obj.creationMode);
    this.aspectMode = map(obj.aspectMode);
  }
}

export default Sprite;

