import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import AnalyticsExportTask from '../../models/AnalyticsExportTask';
import PaginationResponse from '../../models/PaginationResponse';
import AnalyticsExportTaskListQueryParams from './AnalyticsExportTaskListQueryParams';

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
   * @param {AnalyticsExportTask} [analyticsExportTask] The export task to be created
   * @throws {RequiredError}
   * @memberof ExportsApi
   */
  public create(analyticsExportTask?: AnalyticsExportTask): Promise<AnalyticsExportTask> {
    return this.restClient.post<AnalyticsExportTask>('/analytics/exports', {}, analyticsExportTask).then((response) => {
      return new AnalyticsExportTask(response);
    });
  }

  /**
   * @summary Get export task
   * @param {string} exportTaskId Export task id
   * @throws {RequiredError}
   * @memberof ExportsApi
   */
  public get(exportTaskId: string): Promise<AnalyticsExportTask> {
    const pathParamMap = {
      export_task_id: exportTaskId
    };
    return this.restClient.get<AnalyticsExportTask>('/analytics/exports/{export_task_id}', pathParamMap).then((response) => {
      return new AnalyticsExportTask(response);
    });
  }

  /**
   * @summary List Export Tasks
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ExportsApi
   */
  public list(queryParams?: AnalyticsExportTaskListQueryParams): Promise<PaginationResponse<AnalyticsExportTask>> {
    return this.restClient.get<PaginationResponse<AnalyticsExportTask>>('/analytics/exports', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AnalyticsExportTask>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AnalyticsExportTask(i));
      }
      return paginationResponse;
    });
  }
}
