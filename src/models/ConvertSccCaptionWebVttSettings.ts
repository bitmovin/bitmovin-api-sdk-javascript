import {map} from '../common/Mapper';
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

  constructor(obj: Partial<ConvertSccCaptionWebVttSettings>) {

    this.positionMode = obj.positionMode;
    this.removeFlash = obj.removeFlash;
    this.removeColor = obj.removeColor;
  }
}

export default ConvertSccCaptionWebVttSettings;

