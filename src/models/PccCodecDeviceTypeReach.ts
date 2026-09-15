import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccCodecDeviceTypeReach
 */
export class PccCodecDeviceTypeReach {
  /**
   * @type {string}
   * @memberof PccCodecDeviceTypeReach
   */
  public deviceType?: string;

  /**
   * Distinct selected device pools that played this codec. (required)
   * @type {number}
   * @memberof PccCodecDeviceTypeReach
   */
  public played?: number;

  /**
   * Distinct selected pools that answered about this codec. A protection-only refusal is excluded. (required)
   * @type {number}
   * @memberof PccCodecDeviceTypeReach
   */
  public measured?: number;

  constructor(obj?: Partial<PccCodecDeviceTypeReach>) {
    if(!obj) {
      return;
    }
    this.deviceType = map(obj.deviceType);
    this.played = map(obj.played);
    this.measured = map(obj.measured);
  }
}

export default PccCodecDeviceTypeReach;

