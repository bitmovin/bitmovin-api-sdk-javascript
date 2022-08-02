import {map, mapArray} from '../common/Mapper';
import ChromaLocation from './ChromaLocation';
import ColorPrimaries from './ColorPrimaries';
import ColorRange from './ColorRange';
import ColorSpace from './ColorSpace';
import ColorTransfer from './ColorTransfer';
import InputColorPrimaries from './InputColorPrimaries';
import InputColorRange from './InputColorRange';
import InputColorSpace from './InputColorSpace';
import InputColorTransfer from './InputColorTransfer';

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
   * The color space to be applied. If used on a Dolby Vision stream, this value must be set to UNSPECIFIED.
   * @type {ColorSpace}
   * @memberof ColorConfig
   */
  public colorSpace?: ColorSpace;

  /**
   * The color primaries to be applied. If used on a Dolby Vision stream, this value must be set to UNSPECIFIED.
   * @type {ColorPrimaries}
   * @memberof ColorConfig
   */
  public colorPrimaries?: ColorPrimaries;

  /**
   * The color range to be applied. If used on a Dolby Vision stream, this value must be set to JPEG.
   * @type {ColorRange}
   * @memberof ColorConfig
   */
  public colorRange?: ColorRange;

  /**
   * The color transfer to be applied. If used on a Dolby Vision stream, this value must be set to UNSPECIFIED.
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

  /**
   * Override the color primaries detected in the input file. If not set the input color primaries will be automatically detected if possible.
   * @type {InputColorPrimaries}
   * @memberof ColorConfig
   */
  public inputColorPrimaries?: InputColorPrimaries;

  /**
   * Override the color transfer detected in the input file. If not set the input color transfer will be automatically detected if possible.
   * @type {InputColorTransfer}
   * @memberof ColorConfig
   */
  public inputColorTransfer?: InputColorTransfer;

  constructor(obj?: Partial<ColorConfig>) {
    if(!obj) {
      return;
    }
    this.copyChromaLocationFlag = map(obj.copyChromaLocationFlag);
    this.copyColorSpaceFlag = map(obj.copyColorSpaceFlag);
    this.copyColorPrimariesFlag = map(obj.copyColorPrimariesFlag);
    this.copyColorRangeFlag = map(obj.copyColorRangeFlag);
    this.copyColorTransferFlag = map(obj.copyColorTransferFlag);
    this.chromaLocation = map(obj.chromaLocation);
    this.colorSpace = map(obj.colorSpace);
    this.colorPrimaries = map(obj.colorPrimaries);
    this.colorRange = map(obj.colorRange);
    this.colorTransfer = map(obj.colorTransfer);
    this.inputColorSpace = map(obj.inputColorSpace);
    this.inputColorRange = map(obj.inputColorRange);
    this.inputColorPrimaries = map(obj.inputColorPrimaries);
    this.inputColorTransfer = map(obj.inputColorTransfer);
  }
}

export default ColorConfig;

