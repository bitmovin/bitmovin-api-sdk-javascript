import {map} from '../common/Mapper';
import TimeSpan from './TimeSpan';

/**
 * @export
 * @class PsnrQualityMetric
 */
export class PsnrQualityMetric {
  constructor(obj: any) {
    this.timeSpan = map<TimeSpan>(obj.timeSpan, TimeSpan);
    this.psnr = map(obj.psnr);
  }

  /**
   * @type {TimeSpan}
   * @memberof PsnrQualityMetric
   */
  public timeSpan: TimeSpan;
  /**
   * Peak signal-to-noise ratio (required)
   * @type {number}
   * @memberof PsnrQualityMetric
   */
  public psnr: number;
}

export default PsnrQualityMetric;

