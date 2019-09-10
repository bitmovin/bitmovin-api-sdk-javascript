import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SrtStatisticWindow
 */
export class SrtStatisticWindow {
  /**
   * @type {number}
   * @memberof SrtStatisticWindow
   */
  public congestion?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticWindow
   */
  public flight?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticWindow
   */
  public flow?: number;

  constructor(obj?: Partial<SrtStatisticWindow>) {
    if(!obj) {
      return;
    }
    this.congestion = map(obj.congestion);
    this.flight = map(obj.flight);
    this.flow = map(obj.flow);
  }
}

export default SrtStatisticWindow;

