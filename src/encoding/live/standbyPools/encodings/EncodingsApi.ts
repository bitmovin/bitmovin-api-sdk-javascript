import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import LiveStandbyPoolEncoding from '../../../../models/LiveStandbyPoolEncoding';
import PaginationResponse from '../../../../models/PaginationResponse';
import {LiveStandbyPoolEncodingListQueryParams, LiveStandbyPoolEncodingListQueryParamsBuilder} from './LiveStandbyPoolEncodingListQueryParams';

/**
 * EncodingsApi - object-oriented interface
 * @export
 * @class EncodingsApi
 * @extends {BaseAPI}
 */
export default class EncodingsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Delete encoding from pool by id
   * @param {string} poolId Id of the standby pool
   * @param {string} id Id of the standby pool encoding
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public delete(poolId: string, id: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      pool_id: poolId,
      id: id
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/live/standby-pools/{pool_id}/encodings/{id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary List encodings from a standby pool
   * @param {string} poolId Id of the standby pool
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public list(poolId: string, queryParameters?: LiveStandbyPoolEncodingListQueryParams | ((q: LiveStandbyPoolEncodingListQueryParamsBuilder) => LiveStandbyPoolEncodingListQueryParamsBuilder)): Promise<PaginationResponse<LiveStandbyPoolEncoding>> {
    const pathParamMap = {
      pool_id: poolId
    };
    let queryParams: LiveStandbyPoolEncodingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LiveStandbyPoolEncodingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<LiveStandbyPoolEncoding>>('/encoding/live/standby-pools/{pool_id}/encodings', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<LiveStandbyPoolEncoding>(response, LiveStandbyPoolEncoding);
    });
  }
}
