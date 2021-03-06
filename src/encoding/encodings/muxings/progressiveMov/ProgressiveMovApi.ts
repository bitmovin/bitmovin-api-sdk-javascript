import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import InformationApi from './information/InformationApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ProgressiveMovMuxing from '../../../../models/ProgressiveMovMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ProgressiveMovMuxingListQueryParams, ProgressiveMovMuxingListQueryParamsBuilder} from './ProgressiveMovMuxingListQueryParams';

/**
 * ProgressiveMovApi - object-oriented interface
 * @export
 * @class ProgressiveMovApi
 * @extends {BaseAPI}
 */
export default class ProgressiveMovApi extends BaseAPI {
  public customdata: CustomdataApi;
  public information: InformationApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.information = new InformationApi(configuration);
  }

  /**
   * @summary Add Progressive MOV muxing
   * @param {string} encodingId Id of the encoding.
   * @param {ProgressiveMovMuxing} progressiveMovMuxing The Progressive MOV muxing to be created
   * @throws {BitmovinError}
   * @memberof ProgressiveMovApi
   */
  public create(encodingId: string, progressiveMovMuxing?: ProgressiveMovMuxing): Promise<ProgressiveMovMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ProgressiveMovMuxing>('/encoding/encodings/{encoding_id}/muxings/progressive-mov', pathParamMap, progressiveMovMuxing).then((response) => {
      return map(response, ProgressiveMovMuxing);
    });
  }

  /**
   * @summary Delete Progressive MOV muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive MOV muxing
   * @throws {BitmovinError}
   * @memberof ProgressiveMovApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/progressive-mov/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Progressive MOV muxing details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive MOV muxing
   * @throws {BitmovinError}
   * @memberof ProgressiveMovApi
   */
  public get(encodingId: string, muxingId: string): Promise<ProgressiveMovMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<ProgressiveMovMuxing>('/encoding/encodings/{encoding_id}/muxings/progressive-mov/{muxing_id}', pathParamMap).then((response) => {
      return map(response, ProgressiveMovMuxing);
    });
  }

  /**
   * @summary List Progressive MOV muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ProgressiveMovApi
   */
  public list(encodingId: string, queryParameters?: ProgressiveMovMuxingListQueryParams | ((q: ProgressiveMovMuxingListQueryParamsBuilder) => ProgressiveMovMuxingListQueryParamsBuilder)): Promise<PaginationResponse<ProgressiveMovMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ProgressiveMovMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ProgressiveMovMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ProgressiveMovMuxing>>('/encoding/encodings/{encoding_id}/muxings/progressive-mov', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ProgressiveMovMuxing>(response, ProgressiveMovMuxing);
    });
  }
}
