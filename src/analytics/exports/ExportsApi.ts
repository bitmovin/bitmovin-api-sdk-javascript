import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import AnalyticsExportTask from '../../models/AnalyticsExportTask';
import PaginationResponse from '../../models/PaginationResponse';
import {AnalyticsExportTaskListQueryParams, AnalyticsExportTaskListQueryParamsBuilder} from './AnalyticsExportTaskListQueryParams';

/**
 * ExportsApi - object-oriented interface
 * @export
 * @class ExportsApi
 * @extends {BaseAPI}
 */
export default class ExportsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Export Task
   * @param {AnalyticsExportTask} analyticsExportTask The export task to be created
   * @throws {BitmovinError}
   * @memberof ExportsApi
   */
  public create(analyticsExportTask?: AnalyticsExportTask): Promise<AnalyticsExportTask> {
    return this.restClient.post<AnalyticsExportTask>('/analytics/exports', {}, analyticsExportTask).then((response) => {
      return map(response, AnalyticsExportTask);
    });
  }

  /**
   * @summary Get export task
   * @param {string} exportTaskId Export task id
   * @throws {BitmovinError}
   * @memberof ExportsApi
   */
  public get(exportTaskId: string): Promise<AnalyticsExportTask> {
    const pathParamMap = {
      export_task_id: exportTaskId
    };
    return this.restClient.get<AnalyticsExportTask>('/analytics/exports/{export_task_id}', pathParamMap).then((response) => {
      return map(response, AnalyticsExportTask);
    });
  }

  /**
   * @summary List Export Tasks
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ExportsApi
   */
  public list(queryParameters?: AnalyticsExportTaskListQueryParams | ((q: AnalyticsExportTaskListQueryParamsBuilder) => AnalyticsExportTaskListQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsExportTask>> {
    let queryParams: AnalyticsExportTaskListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsExportTaskListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsExportTask>>('/analytics/exports', {}, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsExportTask>(response, AnalyticsExportTask);
    });
  }
}
