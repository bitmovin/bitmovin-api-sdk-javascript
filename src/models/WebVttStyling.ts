import {map, mapArray} from '../common/Mapper';
import WebVttStylingMode from './WebVttStylingMode';

/**
 * @export
 * @class WebVttStyling
 */
export class WebVttStyling {
  /**
   * @type {WebVttStylingMode}
   * @memberof WebVttStyling
   */
  public mode?: WebVttStylingMode;

  constructor(obj?: Partial<WebVttStyling>) {
    if(!obj) {
      return;
    }
    this.mode = map(obj.mode);
  }
}

export default WebVttStyling;

