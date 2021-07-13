import {map, mapArray} from '../common/Mapper';
import ImscStylingMode from './ImscStylingMode';

/**
 * @export
 * @class ImscStyling
 */
export class ImscStyling {
  /**
   * @type {ImscStylingMode}
   * @memberof ImscStyling
   */
  public mode?: ImscStylingMode;

  constructor(obj?: Partial<ImscStyling>) {
    if(!obj) {
      return;
    }
    this.mode = map(obj.mode);
  }
}

export default ImscStyling;

