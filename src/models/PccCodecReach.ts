import {map, mapArray} from '../common/Mapper';
import PccCodecDeviceTypeReach from './PccCodecDeviceTypeReach';

/**
 * @export
 * @class PccCodecReach
 */
export class PccCodecReach {
  /**
   * @type {string}
   * @memberof PccCodecReach
   */
  public codec?: string;

  /**
   * @type {PccCodecDeviceTypeReach[]}
   * @memberof PccCodecReach
   */
  public byDeviceType?: PccCodecDeviceTypeReach[];

  constructor(obj?: Partial<PccCodecReach>) {
    if(!obj) {
      return;
    }
    this.codec = map(obj.codec);
    this.byDeviceType = mapArray(obj.byDeviceType, PccCodecDeviceTypeReach);
  }
}

export default PccCodecReach;

