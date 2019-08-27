import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import InformationApi from './information/InformationApi';
import Id3Api from './id3/Id3Api';
import DrmApi from './drm/DrmApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ProgressiveTsMuxing from '../../../../models/ProgressiveTsMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ProgressiveTsMuxingListQueryParams, ProgressiveTsMuxingListQueryParamsBuilder} from './ProgressiveTsMuxingListQueryParams';

/**
 * ProgressiveTsApi - object-oriented interface
 * @export
 * @class ProgressiveTsApi
 * @extends {BaseAPI}
 */
export default class ProgressiveTsApi extends BaseAPI {
  public customdata: CustomdataApi;
  public information: InformationApi;
  public id3: Id3Api;
  public drm: DrmApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.information = new InformationApi(configuration);
    this.id3 = new Id3Api(configuration);
    this.drm = new DrmApi(configuration);
  }

  /**
   * @summary Add Progressive TS Muxing
   * @param {string} encodingId ID of the encoding.
   * @param {ProgressiveTsMuxing} progressiveTsMuxing The Progressive TS Muxing to be created
   * @throws {RequiredError}
   * @memberof ProgressiveTsApi
   */
  public create(encodingId: string, progressiveTsMuxing?: ProgressiveTsMuxing): Promise<ProgressiveTsMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ProgressiveTsMuxing>('/encoding/encodings/{encoding_id}/muxings/progressive-ts', pathParamMap, progressiveTsMuxing).then((response) => {
      return new ProgressiveTsMuxing(response);
    });
  }

  /**
   * @summary Delete Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS muxing
   * @throws {RequiredError}
   * @memberof ProgressiveTsApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Progressive TS Muxing Details
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @throws {RequiredError}
   * @memberof ProgressiveTsApi
   */
  public get(encodingId: string, muxingId: string): Promise<ProgressiveTsMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<ProgressiveTsMuxing>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}', pathParamMap).then((response) => {
      return new ProgressiveTsMuxing(response);
    });
  }

  /**
   * @summary List Progressive TS Muxings
   * @param {string} encodingId ID of the Encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ProgressiveTsApi
   */
  public list(encodingId: string, queryParameters?: ProgressiveTsMuxingListQueryParams | ((q: ProgressiveTsMuxingListQueryParamsBuilder) => ProgressiveTsMuxingListQueryParamsBuilder)): Promise<PaginationResponse<ProgressiveTsMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ProgressiveTsMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ProgressiveTsMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ProgressiveTsMuxing>>('/encoding/encodings/{encoding_id}/muxings/progressive-ts', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ProgressiveTsMuxing>(response, ProgressiveTsMuxing);;
    });
  }
}
