import {map, mapArray} from '../common/Mapper';
import TimeSpan from './TimeSpan';

/**
 * @export
 * @class PsnrQualityMetric
 */
export class PsnrQualityMetric {
  /**
   * @type {TimeSpan}
   * @memberof PsnrQualityMetric
   */
  public timeSpan?: TimeSpan;

  /**
   * Peak signal-to-noise ratio (required)
   * @type {number}
   * @memberof PsnrQualityMetric
   */
  public psnr?: number;

  constructor(obj?: Partial<PsnrQualityMetric>) {
    if(!obj) {
      return;
    }
    this.timeSpan = map(obj.timeSpan, TimeSpan);
    this.psnr = map(obj.psnr);
  }
}

export default PsnrQualityMetric;

