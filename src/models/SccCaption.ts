import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import InputPath from './InputPath';
import SmpteTimecodeFlavor from './SmpteTimecodeFlavor';

/**
 * @export
 * @class SccCaption
 */
export class SccCaption extends BitmovinResource {
  /**
   * Input location of the SCC file (required)
   * @type {InputPath}
   * @memberof SccCaption
   */
  public input?: InputPath;

  /**
   * Flavor of SMPTE timecodes in the SCC file (drop-frame or non-drop)
   * @type {SmpteTimecodeFlavor}
   * @memberof SccCaption
   */
  public smpteTimecodeFlavor?: SmpteTimecodeFlavor;

  constructor(obj?: Partial<SccCaption>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.input = map(obj.input, InputPath);
    this.smpteTimecodeFlavor = map(obj.smpteTimecodeFlavor);
  }
}

export default SccCaption;

