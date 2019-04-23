import {map} from '../common/Mapper';
import AnalyticsExportTaskOutputTarget from './AnalyticsExportTaskOutputTarget';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class AnalyticsExportTask
 */
export default class AnalyticsExportTask extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.startTime = map(obj.startTime);
    this.endTime = map(obj.endTime);
    this.name = map(obj.name);
    this.description = map(obj.description);
    this.licenseKey = map(obj.licenseKey);
    this.output = map<AnalyticsExportTaskOutputTarget>(obj.output, AnalyticsExportTaskOutputTarget);
  }

  /**
   * Start of timeframe which is exported in UTC format
   * @type {string}
   * @memberof AnalyticsExportTask
   */
  public startTime: string;
  /**
   * End of timeframe which is exported in UTC format
   * @type {string}
   * @memberof AnalyticsExportTask
   */
  public endTime: string;
  /**
   * Name of the export task
   * @type {string}
   * @memberof AnalyticsExportTask
   */
  public name: string;
  /**
   * Export task description
   * @type {string}
   * @memberof AnalyticsExportTask
   */
  public description?: string;
  /**
   * License key
   * @type {string}
   * @memberof AnalyticsExportTask
   */
  public licenseKey: string;
  /**
   * @type {AnalyticsExportTaskOutputTarget}
   * @memberof AnalyticsExportTask
   */
  public output: AnalyticsExportTaskOutputTarget;
}
