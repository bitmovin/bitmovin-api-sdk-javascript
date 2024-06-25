import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import InformationApi from './information/InformationApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ProgressiveWavMuxing from '../../../../models/ProgressiveWavMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ProgressiveWavMuxingListQueryParams, ProgressiveWavMuxingListQueryParamsBuilder} from './ProgressiveWavMuxingListQueryParams';

/**
 * ProgressiveWavApi - object-oriented interface
 * @export
 * @class ProgressiveWavApi
 * @extends {BaseAPI}
 */
export default class ProgressiveWavApi extends BaseAPI {
  public customdata: CustomdataApi;
  public information: InformationApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.information = new InformationApi(configuration);
  }

  /**
   * @summary Add Progressive Wav muxing
   * @param {string} encodingId Id of the encoding.
   * @param {ProgressiveWavMuxing} progressiveWavMuxing The Progressive WAV muxing to be created
   * @throws {BitmovinError}
   * @memberof ProgressiveWavApi
   */
  public create(encodingId: string, progressiveWavMuxing?: ProgressiveWavMuxing): Promise<ProgressiveWavMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ProgressiveWavMuxing>('/encoding/encodings/{encoding_id}/muxings/progressive-wav', pathParamMap, progressiveWavMuxing).then((response) => {
      return map(response, ProgressiveWavMuxing);
    });
  }

  /**
   * @summary Delete Progressive WAV muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive WAV muxing
   * @throws {BitmovinError}
   * @memberof ProgressiveWavApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/progressive-wav/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Progressive WAV muxing details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive WAV muxing
   * @throws {BitmovinError}
   * @memberof ProgressiveWavApi
   */
  public get(encodingId: string, muxingId: string): Promise<ProgressiveWavMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<ProgressiveWavMuxing>('/encoding/encodings/{encoding_id}/muxings/progressive-wav/{muxing_id}', pathParamMap).then((response) => {
      return map(response, ProgressiveWavMuxing);
    });
  }

  /**
   * @summary List Progressive WAV muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ProgressiveWavApi
   */
  public list(encodingId: string, queryParameters?: ProgressiveWavMuxingListQueryParams | ((q: ProgressiveWavMuxingListQueryParamsBuilder) => ProgressiveWavMuxingListQueryParamsBuilder)): Promise<PaginationResponse<ProgressiveWavMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ProgressiveWavMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ProgressiveWavMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ProgressiveWavMuxing>>('/encoding/encodings/{encoding_id}/muxings/progressive-wav', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ProgressiveWavMuxing>(response, ProgressiveWavMuxing);
    });
  }
}
