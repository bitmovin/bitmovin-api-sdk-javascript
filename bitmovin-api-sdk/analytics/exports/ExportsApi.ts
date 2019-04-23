import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import AnalyticsExportTask from '../../models/AnalyticsExportTask';
import AnalyticsExportTaskDetails from '../../models/AnalyticsExportTaskDetails';
import PaginationResponse from '../../models/PaginationResponse';
import AnalyticsExportTaskDetailsListQueryParams from './AnalyticsExportTaskDetailsListQueryParams';

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
  public create(analyticsExportTask?: AnalyticsExportTask): Promise<AnalyticsExportTaskDetails> {
    return this.restClient.post<AnalyticsExportTaskDetails>('/analytics/exports', {}, analyticsExportTask).then((response) => {
      return new AnalyticsExportTaskDetails(response);
    });
  }

  /**
   * @summary Get export task
   * @param {string} exportTaskId Export task id
   * @throws {RequiredError}
   * @memberof ExportsApi
   */
  public get(exportTaskId: string): Promise<AnalyticsExportTaskDetails> {
    const pathParamMap = {
      export_task_id: exportTaskId
    };
    return this.restClient.get<AnalyticsExportTaskDetails>('/analytics/exports/{export_task_id}', pathParamMap).then((response) => {
      return new AnalyticsExportTaskDetails(response);
    });
  }

  /**
   * @summary List Export Tasks
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ExportsApi
   */
  public list(queryParams?: AnalyticsExportTaskDetailsListQueryParams): Promise<PaginationResponse<AnalyticsExportTaskDetails>> {
    return this.restClient.get<PaginationResponse<AnalyticsExportTaskDetails>>('/analytics/exports', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AnalyticsExportTaskDetails>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AnalyticsExportTaskDetails(i));
      }
      return paginationResponse;
    });
  }
}
