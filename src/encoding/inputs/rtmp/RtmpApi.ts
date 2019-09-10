import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import RtmpInput from '../../../models/RtmpInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {RtmpInputListQueryParams, RtmpInputListQueryParamsBuilder} from './RtmpInputListQueryParams';

/**
 * RtmpApi - object-oriented interface
 * @export
 * @class RtmpApi
 * @extends {BaseAPI}
 */
export default class RtmpApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary RTMP Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof RtmpApi
   */
  public get(inputId: string): Promise<RtmpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<RtmpInput>('/encoding/inputs/rtmp/{input_id}', pathParamMap).then((response) => {
      return map(response, RtmpInput);
    });
  }

  /**
   * @summary List RTMP Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RtmpApi
   */
  public list(queryParameters?: RtmpInputListQueryParams | ((q: RtmpInputListQueryParamsBuilder) => RtmpInputListQueryParamsBuilder)): Promise<PaginationResponse<RtmpInput>> {
    let queryParams: RtmpInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new RtmpInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<RtmpInput>>('/encoding/inputs/rtmp', {}, queryParams).then((response) => {
      return new PaginationResponse<RtmpInput>(response, RtmpInput);
    });
  }
}
