import {map, mapArray} from '../common/Mapper';
import ConvertSccPositionMode from './ConvertSccPositionMode';

/**
 * @export
 * @class ConvertSccCaptionWebVttSettings
 */
export class ConvertSccCaptionWebVttSettings {
  /**
   * @type {ConvertSccPositionMode}
   * @memberof ConvertSccCaptionWebVttSettings
   */
  public positionMode?: ConvertSccPositionMode;

  /**
   * Remove flash (blinking) information when converting SCC to WebVTT
   * @type {boolean}
   * @memberof ConvertSccCaptionWebVttSettings
   */
  public removeFlash?: boolean;

  /**
   * Remove color information when converting SCC to WebVTT
   * @type {boolean}
   * @memberof ConvertSccCaptionWebVttSettings
   */
  public removeColor?: boolean;

  constructor(obj?: Partial<ConvertSccCaptionWebVttSettings>) {
    if(!obj) {
      return;
    }
    this.positionMode = map(obj.positionMode);
    this.removeFlash = map(obj.removeFlash);
    this.removeColor = map(obj.removeColor);
  }
}

export default ConvertSccCaptionWebVttSettings;

