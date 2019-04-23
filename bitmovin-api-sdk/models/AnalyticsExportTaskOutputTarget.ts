import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsExportTaskOutputTarget
 */
export default class AnalyticsExportTaskOutputTarget {
  constructor(obj: any) {
    this.outputPath = map(obj.outputPath);
    this.outputId = map(obj.outputId);
  }

  /**
   * Path where the export should be saved
   * @type {string}
   * @memberof AnalyticsExportTaskOutputTarget
   */
  public outputPath: string;
  /**
   * Id of the output that should be used
   * @type {string}
   * @memberof AnalyticsExportTaskOutputTarget
   */
  public outputId: string;
}
