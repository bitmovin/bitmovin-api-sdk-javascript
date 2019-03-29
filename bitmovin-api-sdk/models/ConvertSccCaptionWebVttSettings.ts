import {map} from '../common/Mapper';
import ConvertSccPositionMode from './ConvertSccPositionMode';

/**
 * @export
 * @class ConvertSccCaptionWebVttSettings
 */
export default class ConvertSccCaptionWebVttSettings {
  constructor(obj: any) {
    this.positionMode = map(obj.positionMode);
    this.removeFlash = map(obj.removeFlash);
    this.removeColor = map(obj.removeColor);
  }

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
}
