import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PrewarmedEncoderPool from '../../../../models/PrewarmedEncoderPool';
import PrewarmedEncoderPoolSchedule from '../../../../models/PrewarmedEncoderPoolSchedule';
import PaginationResponse from '../../../../models/PaginationResponse';
import {PrewarmedEncoderPoolListQueryParams, PrewarmedEncoderPoolListQueryParamsBuilder} from './PrewarmedEncoderPoolListQueryParams';

/**
 * SchedulesApi - object-oriented interface
 * @export
 * @class SchedulesApi
 * @extends {BaseAPI}
 */
export default class SchedulesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create prewarmed encoder pool schedule
   * @param {string} poolId Id of the scheduled encoder pool
   * @param {PrewarmedEncoderPoolSchedule} prewarmedEncoderPoolSchedule The prewarmed encoder pool schedule to be created
   * @throws {BitmovinError}
   * @memberof SchedulesApi
   */
  public create(poolId: string, prewarmedEncoderPoolSchedule?: PrewarmedEncoderPoolSchedule): Promise<PrewarmedEncoderPoolSchedule> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.post<PrewarmedEncoderPoolSchedule>('/encoding/infrastructure/prewarmed-encoder-pools/{pool_id}/schedules', pathParamMap, prewarmedEncoderPoolSchedule).then((response) => {
      return map(response, PrewarmedEncoderPoolSchedule);
    });
  }

  /**
   * @summary Delete prewarmed encoder pool schedule
   * @param {string} poolId Id of the scheduled encoder pool
   * @param {string} scheduleId Id of the prewarmed encoder pool schedule
   * @throws {BitmovinError}
   * @memberof SchedulesApi
   */
  public delete(poolId: string, scheduleId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      pool_id: poolId,
      schedule_id: scheduleId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/infrastructure/prewarmed-encoder-pools/{pool_id}/schedules/{schedule_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Prewarmed encoder pool schedule details
   * @param {string} poolId Id of the scheduled encoder pool
   * @param {string} scheduleId Id of the prewarmed encoder pool schedule
   * @throws {BitmovinError}
   * @memberof SchedulesApi
   */
  public get(poolId: string, scheduleId: string): Promise<PrewarmedEncoderPoolSchedule> {
    const pathParamMap = {
      pool_id: poolId,
      schedule_id: scheduleId
    };
    return this.restClient.get<PrewarmedEncoderPoolSchedule>('/encoding/infrastructure/prewarmed-encoder-pools/{pool_id}/schedules/{schedule_id}', pathParamMap).then((response) => {
      return map(response, PrewarmedEncoderPoolSchedule);
    });
  }

  /**
   * @summary List prewarmed encoder pool schedules
   * @param {string} poolId Id of the scheduled encoder pool
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SchedulesApi
   */
  public list(poolId: string, queryParameters?: PrewarmedEncoderPoolListQueryParams | ((q: PrewarmedEncoderPoolListQueryParamsBuilder) => PrewarmedEncoderPoolListQueryParamsBuilder)): Promise<PaginationResponse<PrewarmedEncoderPool>> {
    const pathParamMap = {
      pool_id: poolId
    };
    let queryParams: PrewarmedEncoderPoolListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PrewarmedEncoderPoolListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PrewarmedEncoderPool>>('/encoding/infrastructure/prewarmed-encoder-pools/{pool_id}/schedules', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<PrewarmedEncoderPool>(response, PrewarmedEncoderPool);
    });
  }
}
