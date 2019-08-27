import {map} from '../common/Mapper';
import DailyStatistics from './DailyStatistics';

/**
 * @export
 * @class DailyStatisticsPerLabel
 */
export class DailyStatisticsPerLabel {
  /**
   * Date, format. yyyy-MM-dd (required)
   * @type {Date}
   * @memberof DailyStatisticsPerLabel
   */
  public date?: Date;

  /**
   * List of labels and their aggregated statistics (required)
   * @type {DailyStatistics[]}
   * @memberof DailyStatisticsPerLabel
   */
  public labels?: DailyStatistics[];

  constructor(obj: Partial<DailyStatisticsPerLabel>) {

    this.date = map<Date>(obj.date, Date);
    this.labels = map<DailyStatistics>(obj.labels, DailyStatistics) || [];
  }
}

export default DailyStatisticsPerLabel;

