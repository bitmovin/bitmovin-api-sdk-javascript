import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import LiveStandbyPoolEventLog from '../../../../models/LiveStandbyPoolEventLog';
import PaginationResponse from '../../../../models/PaginationResponse';
import {LiveStandbyPoolEventLogListQueryParams, LiveStandbyPoolEventLogListQueryParamsBuilder} from './LiveStandbyPoolEventLogListQueryParams';

/**
 * LogsApi - object-oriented interface
 * @export
 * @class LogsApi
 * @extends {BaseAPI}
 */
export default class LogsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List event logs for a standby pool
   * @param {string} poolId Id of the standby pool
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LogsApi
   */
  public list(poolId: string, queryParameters?: LiveStandbyPoolEventLogListQueryParams | ((q: LiveStandbyPoolEventLogListQueryParamsBuilder) => LiveStandbyPoolEventLogListQueryParamsBuilder)): Promise<PaginationResponse<LiveStandbyPoolEventLog>> {
    const pathParamMap = {
      pool_id: poolId
    };
    let queryParams: LiveStandbyPoolEventLogListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LiveStandbyPoolEventLogListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<LiveStandbyPoolEventLog>>('/encoding/live/standby-pools/{pool_id}/logs', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<LiveStandbyPoolEventLog>(response, LiveStandbyPoolEventLog);
    });
  }
}
