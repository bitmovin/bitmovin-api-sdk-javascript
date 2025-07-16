import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import HlsInput from '../../../models/HlsInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {HlsInputListQueryParams, HlsInputListQueryParamsBuilder} from './HlsInputListQueryParams';

/**
 * HlsApi - object-oriented interface
 * @export
 * @class HlsApi
 * @extends {BaseAPI}
 */
export default class HlsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create HLS input
   * @param {HlsInput} hlsInput The HLSInput to be created
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public create(hlsInput?: HlsInput): Promise<HlsInput> {
    return this.restClient.post<HlsInput>('/encoding/inputs/hls', {}, hlsInput).then((response) => {
      return map(response, HlsInput);
    });
  }

  /**
   * @summary Delete HLS Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public delete(inputId: string): Promise<HlsInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<HlsInput>('/encoding/inputs/hls/{input_id}', pathParamMap).then((response) => {
      return map(response, HlsInput);
    });
  }

  /**
   * @summary HLS Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public get(inputId: string): Promise<HlsInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<HlsInput>('/encoding/inputs/hls/{input_id}', pathParamMap).then((response) => {
      return map(response, HlsInput);
    });
  }

  /**
   * @summary List HLS inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public list(queryParameters?: HlsInputListQueryParams | ((q: HlsInputListQueryParamsBuilder) => HlsInputListQueryParamsBuilder)): Promise<PaginationResponse<HlsInput>> {
    let queryParams: HlsInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new HlsInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<HlsInput>>('/encoding/inputs/hls', {}, queryParams).then((response) => {
      return new PaginationResponse<HlsInput>(response, HlsInput);
    });
  }
}
