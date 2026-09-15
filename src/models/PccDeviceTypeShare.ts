import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccDeviceTypeShare
 */
export class PccDeviceTypeShare {
  /**
   * The device type reported by the fleet. (required)
   * @type {string}
   * @memberof PccDeviceTypeShare
   */
  public label?: string;

  /**
   * Cells that played, across device pools of this kind. (required)
   * @type {number}
   * @memberof PccDeviceTypeShare
   */
  public played?: number;

  /**
   * Cells with a device-answering verdict, across pools of this kind. The denominator. (required)
   * @type {number}
   * @memberof PccDeviceTypeShare
   */
  public measured?: number;

  /**
   * Device pools of this kind with at least one device-answering verdict. (required)
   * @type {number}
   * @memberof PccDeviceTypeShare
   */
  public models?: number;

  constructor(obj?: Partial<PccDeviceTypeShare>) {
    if(!obj) {
      return;
    }
    this.label = map(obj.label);
    this.played = map(obj.played);
    this.measured = map(obj.measured);
    this.models = map(obj.models);
  }
}

export default PccDeviceTypeShare;

