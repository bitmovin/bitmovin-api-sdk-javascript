import {map} from '../common/Mapper';
import AnalyticsExportStatus from './AnalyticsExportStatus';
import AnalyticsExportTask from './AnalyticsExportTask';
import AnalyticsExportTaskOutputTarget from './AnalyticsExportTaskOutputTarget';

/**
 * @export
 * @class AnalyticsExportTaskDetails
 */
export default class AnalyticsExportTaskDetails extends AnalyticsExportTask {
  constructor(obj: any) {
    super(obj);
    this.progress = map(obj.progress);
    this.status = map(obj.status);
    this.startedAt = map(obj.startedAt);
    this.finishedAt = map(obj.finishedAt);
  }

  /**
   * Progress of the export task
   * @type {number}
   * @memberof AnalyticsExportTaskDetails
   */
  public progress?: number;
  /**
   * @type {AnalyticsExportStatus}
   * @memberof AnalyticsExportTaskDetails
   */
  public status?: AnalyticsExportStatus;
  /**
   * UTC timestamp when the export task started
   * @type {string}
   * @memberof AnalyticsExportTaskDetails
   */
  public startedAt?: string;
  /**
   * UTC timestamp when the export task finished
   * @type {string}
   * @memberof AnalyticsExportTaskDetails
   */
  public finishedAt?: string;
}
