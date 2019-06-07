import {map} from '../common/Mapper';

/**
 * @export
 * @class SrtStatisticLink
 */
export class SrtStatisticLink {
  constructor(obj: any) {
    this.bandwidth = map(obj.bandwidth);
    this.maxBandwidth = map(obj.maxBandwidth);
    this.rtt = map(obj.rtt);
  }

  /**
   * @type {number}
   * @memberof SrtStatisticLink
   */
  public bandwidth?: number;
  /**
   * @type {number}
   * @memberof SrtStatisticLink
   */
  public maxBandwidth?: number;
  /**
   * @type {number}
   * @memberof SrtStatisticLink
   */
  public rtt?: number;
}

export default SrtStatisticLink;

