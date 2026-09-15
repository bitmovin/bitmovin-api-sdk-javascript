import {map, mapArray} from '../common/Mapper';
import PccDeviceHdrVerdict from './PccDeviceHdrVerdict';
import PccHdrOutcomeCount from './PccHdrOutcomeCount';

/**
 * @export
 * @class PccHdrDevice
 */
export class PccHdrDevice {
  /**
   * Opaque stable pool key for row identity. Do not display it as a device name. (required)
   * @type {string}
   * @memberof PccHdrDevice
   */
  public key?: string;

  /**
   * @type {string}
   * @memberof PccHdrDevice
   */
  public name?: string;

  /**
   * @type {string}
   * @memberof PccHdrDevice
   */
  public qualifier?: string;

  /**
   * All selected HDR playback passes for this device pool. (required)
   * @type {number}
   * @memberof PccHdrDevice
   */
  public passes?: number;

  /**
   * Service-resolved verdict: negative findings outrank positive results. Null when no pass carries an HDR reading. (required)
   * @type {PccDeviceHdrVerdict}
   * @memberof PccHdrDevice
   */
  public verdict?: PccDeviceHdrVerdict;

  /**
   * @type {PccHdrOutcomeCount[]}
   * @memberof PccHdrDevice
   */
  public outcomes?: PccHdrOutcomeCount[];

  constructor(obj?: Partial<PccHdrDevice>) {
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
    this.name = map(obj.name);
    this.qualifier = map(obj.qualifier);
    this.passes = map(obj.passes);
    this.verdict = map(obj.verdict, PccDeviceHdrVerdict);
    this.outcomes = mapArray(obj.outcomes, PccHdrOutcomeCount);
  }
}

export default PccHdrDevice;

