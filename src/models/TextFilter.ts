import {map, mapArray} from '../common/Mapper';
import Filter from './Filter';
import FilterType from './FilterType';
import TextFilterFont from './TextFilterFont';

/**
 * Only one of those properties may be set: fontSize, fontSizeExpression.
 * @export
 * @class TextFilter
 */
export class TextFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof TextFilter
   */
  public readonly type: FilterType = FilterType.TEXT;

  /**
   * @type {TextFilterFont}
   * @memberof TextFilter
   */
  public font?: TextFilterFont;

  /**
   * If set to true a box is drawn around the text using the background color.
   * @type {boolean}
   * @memberof TextFilter
   */
  public box?: boolean;

  /**
   * The width of the box drawn around the text.
   * @type {number}
   * @memberof TextFilter
   */
  public boxBorderWidth?: number;

  /**
   * The background color to be used for drawing the box.
   * @type {string}
   * @memberof TextFilter
   */
  public boxColor?: string;

  /**
   * Line spacing of the border around the box in pixels
   * @type {number}
   * @memberof TextFilter
   */
  public lineSpacing?: number;

  /**
   * Width of the border around the text
   * @type {number}
   * @memberof TextFilter
   */
  public borderWidth?: number;

  /**
   * If set to true, it will fix text coordinates to avoid clipping if necessary
   * @type {boolean}
   * @memberof TextFilter
   */
  public fixBounds?: boolean;

  /**
   * The color to be used to draw the text
   * @type {string}
   * @memberof TextFilter
   */
  public fontColor?: string;

  /**
   * Font size to be used to draw the text
   * @type {number}
   * @memberof TextFilter
   */
  public fontSize?: number;

  /**
   * An expression for the Font size. Either fontSize or fontSizeExpression can be set at the same time. The following variables are valid: main_h, h, H for input height and main_w, w, W for the input_width
   * @type {string}
   * @memberof TextFilter
   */
  public fontSizeExpression?: string;

  /**
   * If set, alpha blending for the text is applied. Values are valid between 0.0 and 1.0.
   * @type {number}
   * @memberof TextFilter
   */
  public alpha?: number;

  /**
   * Color of the shadow
   * @type {string}
   * @memberof TextFilter
   */
  public shadowColor?: string;

  /**
   * X offset of the shadow
   * @type {number}
   * @memberof TextFilter
   */
  public shadowX?: number;

  /**
   * Y offset of the shadow
   * @type {number}
   * @memberof TextFilter
   */
  public shadowY?: number;

  /**
   * If set, the timecode representation in \"hh:mm:ss[:;.]ff\" format will be applied. Drop-frame timecodes (containing \";\" or \".\") must only be used with video frame rates of 29.97, 30, 59.94 or 60 FPS, according to the SMPTE standard
   * @type {string}
   * @memberof TextFilter
   */
  public timecode?: string;

  /**
   * String to be drawn
   * @type {string}
   * @memberof TextFilter
   */
  public text?: string;

  /**
   * X position of the text. Also an expression can be used. The following variables are valid: line_h - height of each text line; main_h - input height; main_w - input width; n - number of input frame; text_h - Text height; text_w - Text width (required)
   * @type {string}
   * @memberof TextFilter
   */
  public x?: string;

  /**
   * Y position of the text. Also an expression can be used. The following variables are valid: line_h - height of each text line; main_h - input height; main_w - input width; n - number of input frame; text_h - Text height; text_w - Text width (required)
   * @type {string}
   * @memberof TextFilter
   */
  public y?: string;

  /**
   * Video frame rate
   * @type {string}
   * @memberof TextFilter
   */
  public rate?: string;

  constructor(obj?: Partial<TextFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.font = map(obj.font);
    this.box = map(obj.box);
    this.boxBorderWidth = map(obj.boxBorderWidth);
    this.boxColor = map(obj.boxColor);
    this.lineSpacing = map(obj.lineSpacing);
    this.borderWidth = map(obj.borderWidth);
    this.fixBounds = map(obj.fixBounds);
    this.fontColor = map(obj.fontColor);
    this.fontSize = map(obj.fontSize);
    this.fontSizeExpression = map(obj.fontSizeExpression);
    this.alpha = map(obj.alpha);
    this.shadowColor = map(obj.shadowColor);
    this.shadowX = map(obj.shadowX);
    this.shadowY = map(obj.shadowY);
    this.timecode = map(obj.timecode);
    this.text = map(obj.text);
    this.x = map(obj.x);
    this.y = map(obj.y);
    this.rate = map(obj.rate);
  }
}

export default TextFilter;

