import {map, mapArray} from '../common/Mapper';
import EsamSignal from './EsamSignal';

/**
 * ESAM media point following the SCTE-250 standard
 * @export
 * @class EsamMediaPoint
 */
export class EsamMediaPoint {
  /**
   * ISO 8601 date-time specifying when the signal should be matched and inserted into the live stream
   * @type {Date}
   * @memberof EsamMediaPoint
   */
  public matchTime?: Date;

  /**
   * Array of ESAM signals containing SCTE-35 binary data. At least one signal is required (required)
   * @type {EsamSignal[]}
   * @memberof EsamMediaPoint
   */
  public signals?: EsamSignal[];

  constructor(obj?: Partial<EsamMediaPoint>) {
    if(!obj) {
      return;
    }
    this.matchTime = map(obj.matchTime, Date);
    this.signals = mapArray(obj.signals, EsamSignal);
  }
}

export default EsamMediaPoint;

