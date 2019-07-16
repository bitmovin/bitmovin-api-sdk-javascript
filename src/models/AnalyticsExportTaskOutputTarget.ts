import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsExportTaskOutputTarget
 */
export class AnalyticsExportTaskOutputTarget {
  /**
   * Path where the export should be saved (required)
   * @type {string}
   * @memberof AnalyticsExportTaskOutputTarget
   */
  public outputPath: string;

  /**
   * Id of the output that should be used (required)
   * @type {string}
   * @memberof AnalyticsExportTaskOutputTarget
   */
  public outputId: string;

  constructor(obj: Partial<AnalyticsExportTaskOutputTarget>) {
    this.outputPath = map(obj.outputPath);
    this.outputId = map(obj.outputId);
  }
}

export default AnalyticsExportTaskOutputTarget;

