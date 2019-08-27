import {map} from '../common/Mapper';
import ChromaLocation from './ChromaLocation';
import ColorPrimaries from './ColorPrimaries';
import ColorRange from './ColorRange';
import ColorSpace from './ColorSpace';
import ColorTransfer from './ColorTransfer';
import InputColorRange from './InputColorRange';
import InputColorSpace from './InputColorSpace';

/**
 * @export
 * @class ColorConfig
 */
export class ColorConfig {
  /**
   * Copy the chroma location setting from the input source
   * @type {boolean}
   * @memberof ColorConfig
   */
  public copyChromaLocationFlag?: boolean;

  /**
   * Copy the color space setting from the input source
   * @type {boolean}
   * @memberof ColorConfig
   */
  public copyColorSpaceFlag?: boolean;

  /**
   * Copy the color primaries setting from the input source
   * @type {boolean}
   * @memberof ColorConfig
   */
  public copyColorPrimariesFlag?: boolean;

  /**
   * Copy the color range setting from the input source
   * @type {boolean}
   * @memberof ColorConfig
   */
  public copyColorRangeFlag?: boolean;

  /**
   * Copy the color transfer setting from the input source
   * @type {boolean}
   * @memberof ColorConfig
   */
  public copyColorTransferFlag?: boolean;

  /**
   * The chroma location to be applied
   * @type {ChromaLocation}
   * @memberof ColorConfig
   */
  public chromaLocation?: ChromaLocation;

  /**
   * The color space to be applied
   * @type {ColorSpace}
   * @memberof ColorConfig
   */
  public colorSpace?: ColorSpace;

  /**
   * The color primaries to be applied
   * @type {ColorPrimaries}
   * @memberof ColorConfig
   */
  public colorPrimaries?: ColorPrimaries;

  /**
   * The color range to be applied
   * @type {ColorRange}
   * @memberof ColorConfig
   */
  public colorRange?: ColorRange;

  /**
   * The color transfer to be applied
   * @type {ColorTransfer}
   * @memberof ColorConfig
   */
  public colorTransfer?: ColorTransfer;

  /**
   * Override the color space detected in the input file. If not set the input color space will be automatically detected if possible.
   * @type {InputColorSpace}
   * @memberof ColorConfig
   */
  public inputColorSpace?: InputColorSpace;

  /**
   * Override the color range detected in the input file. If not set the input color range will be automatically detected if possible.
   * @type {InputColorRange}
   * @memberof ColorConfig
   */
  public inputColorRange?: InputColorRange;

  constructor(obj: Partial<ColorConfig>) {

    this.copyChromaLocationFlag = obj.copyChromaLocationFlag;
    this.copyColorSpaceFlag = obj.copyColorSpaceFlag;
    this.copyColorPrimariesFlag = obj.copyColorPrimariesFlag;
    this.copyColorRangeFlag = obj.copyColorRangeFlag;
    this.copyColorTransferFlag = obj.copyColorTransferFlag;
    this.chromaLocation = obj.chromaLocation;
    this.colorSpace = obj.colorSpace;
    this.colorPrimaries = obj.colorPrimaries;
    this.colorRange = obj.colorRange;
    this.colorTransfer = obj.colorTransfer;
    this.inputColorSpace = obj.inputColorSpace;
    this.inputColorRange = obj.inputColorRange;
  }
}

export default ColorConfig;

