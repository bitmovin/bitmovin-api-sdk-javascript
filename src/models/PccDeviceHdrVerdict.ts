import {map, mapArray} from '../common/Mapper';
import PccHdrConfidence from './PccHdrConfidence';

/**
 * @export
 * @class PccDeviceHdrVerdict
 */
export class PccDeviceHdrVerdict {
  /**
   * @type {string}
   * @memberof PccDeviceHdrVerdict
   */
  public mark?: string;

  /**
   * @type {string}
   * @memberof PccDeviceHdrVerdict
   */
  public label?: string;

  /**
   * @type {PccHdrConfidence}
   * @memberof PccDeviceHdrVerdict
   */
  public confidence?: PccHdrConfidence;

  /**
   * @type {boolean}
   * @memberof PccDeviceHdrVerdict
   */
  public actionable?: boolean;

  /**
   * HDR passes supporting this verdict, not all passes for the device. (required)
   * @type {number}
   * @memberof PccDeviceHdrVerdict
   */
  public passes?: number;

  constructor(obj?: Partial<PccDeviceHdrVerdict>) {
    if(!obj) {
      return;
    }
    this.mark = map(obj.mark);
    this.label = map(obj.label);
    this.confidence = map(obj.confidence);
    this.actionable = map(obj.actionable);
    this.passes = map(obj.passes);
  }
}

export default PccDeviceHdrVerdict;

