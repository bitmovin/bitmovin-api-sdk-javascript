import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import SchedulesApi from './schedules/SchedulesApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import PrewarmedEncoderPool from '../../../models/PrewarmedEncoderPool';
import PaginationResponse from '../../../models/PaginationResponse';
import {PrewarmedEncoderPoolListQueryParams, PrewarmedEncoderPoolListQueryParamsBuilder} from './PrewarmedEncoderPoolListQueryParams';

/**
 * PrewarmedEncoderPoolsApi - object-oriented interface
 * @export
 * @class PrewarmedEncoderPoolsApi
 * @extends {BaseAPI}
 */
export default class PrewarmedEncoderPoolsApi extends BaseAPI {
  public schedules: SchedulesApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.schedules = new SchedulesApi(configuration);
  }

  /**
   * @summary Create prewarmed encoder pool
   * @param {PrewarmedEncoderPool} prewarmedEncoderPool The prewarmed encoder pool to be created
   * @throws {BitmovinError}
   * @memberof PrewarmedEncoderPoolsApi
   */
  public create(prewarmedEncoderPool?: PrewarmedEncoderPool): Promise<PrewarmedEncoderPool> {
    return this.restClient.post<PrewarmedEncoderPool>('/encoding/infrastructure/prewarmed-encoder-pools', {}, prewarmedEncoderPool).then((response) => {
      return map(response, PrewarmedEncoderPool);
    });
  }

  /**
   * @summary Delete prewarmed encoder pool
   * @param {string} poolId Id of the prewarmed encoder pool
   * @throws {BitmovinError}
   * @memberof PrewarmedEncoderPoolsApi
   */
  public delete(poolId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/infrastructure/prewarmed-encoder-pools/{pool_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Prewarmed encoder pool details
   * @param {string} poolId Id of the prewarmed encoder pool
   * @throws {BitmovinError}
   * @memberof PrewarmedEncoderPoolsApi
   */
  public get(poolId: string): Promise<PrewarmedEncoderPool> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.get<PrewarmedEncoderPool>('/encoding/infrastructure/prewarmed-encoder-pools/{pool_id}', pathParamMap).then((response) => {
      return map(response, PrewarmedEncoderPool);
    });
  }

  /**
   * @summary List prewarmed encoder pools
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof PrewarmedEncoderPoolsApi
   */
  public list(queryParameters?: PrewarmedEncoderPoolListQueryParams | ((q: PrewarmedEncoderPoolListQueryParamsBuilder) => PrewarmedEncoderPoolListQueryParamsBuilder)): Promise<PaginationResponse<PrewarmedEncoderPool>> {
    let queryParams: PrewarmedEncoderPoolListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PrewarmedEncoderPoolListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PrewarmedEncoderPool>>('/encoding/infrastructure/prewarmed-encoder-pools', {}, queryParams).then((response) => {
      return new PaginationResponse<PrewarmedEncoderPool>(response, PrewarmedEncoderPool);
    });
  }

  /**
   * @summary Start prewarmed encoder pool
   * @param {string} poolId Id of the prewarmed encoder pool to be started
   * @throws {BitmovinError}
   * @memberof PrewarmedEncoderPoolsApi
   */
  public start(poolId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/infrastructure/prewarmed-encoder-pools/{pool_id}/start', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Stop prewarmed encoder pool
   * @param {string} poolId Id of the prewarmed encoder pool to be stopped
   * @throws {BitmovinError}
   * @memberof PrewarmedEncoderPoolsApi
   */
  public stop(poolId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/infrastructure/prewarmed-encoder-pools/{pool_id}/stop', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
