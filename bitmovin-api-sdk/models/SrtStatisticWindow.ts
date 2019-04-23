import {map} from '../common/Mapper';

/**
 * @export
 * @class SrtStatisticWindow
 */
export default class SrtStatisticWindow {
  constructor(obj: any) {
    this.congestion = map(obj.congestion);
    this.flight = map(obj.flight);
    this.flow = map(obj.flow);
  }

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
}
