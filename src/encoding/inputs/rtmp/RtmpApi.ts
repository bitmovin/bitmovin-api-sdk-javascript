import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import RtmpInput from '../../../models/RtmpInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {RtmpInputListQueryParams, RtmpInputListQueryParamsBuilder} from './RtmpInputListQueryParams';
import {getType, map} from '../../../common/Mapper';

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
   * @throws {RequiredError}
   * @memberof RtmpApi
   */
  public get(inputId: string): Promise<RtmpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<RtmpInput>('/encoding/inputs/rtmp/{input_id}', pathParamMap).then((response) => {
      return new RtmpInput(response);
    });
  }

  /**
   * @summary List RTMP Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
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
      const paginationResponse = new PaginationResponse<RtmpInput>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new RtmpInput(i));
      }
      return paginationResponse;
    });
  }
}
