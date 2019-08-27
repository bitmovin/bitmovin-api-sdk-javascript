import {map} from '../common/Mapper';

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

  constructor(obj: Partial<SrtStatisticWindow>) {

    this.congestion = obj.congestion;
    this.flight = obj.flight;
    this.flow = obj.flow;
  }
}

export default SrtStatisticWindow;

