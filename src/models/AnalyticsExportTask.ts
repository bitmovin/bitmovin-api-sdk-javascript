import {map, mapArray} from '../common/Mapper';
import AnalyticsExportStatus from './AnalyticsExportStatus';
import AnalyticsExportTaskOutputTarget from './AnalyticsExportTaskOutputTarget';
import AnalyticsExportType from './AnalyticsExportType';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class AnalyticsExportTask
 */
export class AnalyticsExportTask extends BitmovinResponse {
  /**
   * Start of timeframe which is exported in UTC format (required)
   * @type {Date}
   * @memberof AnalyticsExportTask
   */
  public startTime?: Date;

  /**
   * End of timeframe which is exported in UTC format (required)
   * @type {Date}
   * @memberof AnalyticsExportTask
   */
  public endTime?: Date;

  /**
   * Name of the export task (required)
   * @type {string}
   * @memberof AnalyticsExportTask
   */
  public name?: string;

  /**
   * Export task description
   * @type {string}
   * @memberof AnalyticsExportTask
   */
  public description?: string;

  /**
   * License key (required)
   * @type {string}
   * @memberof AnalyticsExportTask
   */
  public licenseKey?: string;

  /**
   * @type {AnalyticsExportTaskOutputTarget}
   * @memberof AnalyticsExportTask
   */
  public output?: AnalyticsExportTaskOutputTarget;

  /**
   * Progress of the export task
   * @type {number}
   * @memberof AnalyticsExportTask
   */
  public progress?: number;

  /**
   * @type {AnalyticsExportStatus}
   * @memberof AnalyticsExportTask
   */
  public status?: AnalyticsExportStatus;

  /**
   * UTC timestamp when the export task started
   * @type {Date}
   * @memberof AnalyticsExportTask
   */
  public startedAt?: Date;

  /**
   * UTC timestamp when the export task finished
   * @type {Date}
   * @memberof AnalyticsExportTask
   */
  public finishedAt?: Date;

  /**
   * @type {AnalyticsExportType}
   * @memberof AnalyticsExportTask
   */
  public type?: AnalyticsExportType;

  /**
   * @type {string[]}
   * @memberof AnalyticsExportTask
   */
  public columns?: string[];

  constructor(obj?: Partial<AnalyticsExportTask>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.startTime = map(obj.startTime, Date);
    this.endTime = map(obj.endTime, Date);
    this.name = map(obj.name);
    this.description = map(obj.description);
    this.licenseKey = map(obj.licenseKey);
    this.output = map(obj.output, AnalyticsExportTaskOutputTarget);
    this.progress = map(obj.progress);
    this.status = map(obj.status);
    this.startedAt = map(obj.startedAt, Date);
    this.finishedAt = map(obj.finishedAt, Date);
    this.type = map(obj.type);
    this.columns = mapArray(obj.columns);
  }
}

export default AnalyticsExportTask;

