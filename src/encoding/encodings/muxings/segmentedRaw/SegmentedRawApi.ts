import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import SegmentedRawMuxing from '../../../../models/SegmentedRawMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {SegmentedRawMuxingListQueryParams, SegmentedRawMuxingListQueryParamsBuilder} from './SegmentedRawMuxingListQueryParams';
import {getType, map} from '../../../../common/Mapper';

/**
 * SegmentedRawApi - object-oriented interface
 * @export
 * @class SegmentedRawApi
 * @extends {BaseAPI}
 */
export default class SegmentedRawApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Segmented RAW Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {SegmentedRawMuxing} segmentedRawMuxing The Segmented RAW Muxing to be created
   * @throws {RequiredError}
   * @memberof SegmentedRawApi
   */
  public create(encodingId: string, segmentedRawMuxing?: SegmentedRawMuxing): Promise<SegmentedRawMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<SegmentedRawMuxing>('/encoding/encodings/{encoding_id}/muxings/segmented-raw', pathParamMap, segmentedRawMuxing).then((response) => {
      return new SegmentedRawMuxing(response);
    });
  }

  /**
   * @summary Delete Segmented RAW Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Segmented RAW muxing
   * @throws {RequiredError}
   * @memberof SegmentedRawApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/segmented-raw/{muxing_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Segmented RAW Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Segmented RAW muxing
   * @throws {RequiredError}
   * @memberof SegmentedRawApi
   */
  public get(encodingId: string, muxingId: string): Promise<SegmentedRawMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<SegmentedRawMuxing>('/encoding/encodings/{encoding_id}/muxings/segmented-raw/{muxing_id}', pathParamMap).then((response) => {
      return new SegmentedRawMuxing(response);
    });
  }

  /**
   * @summary List Segmented RAW Muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SegmentedRawApi
   */
  public list(encodingId: string, queryParameters?: SegmentedRawMuxingListQueryParams | ((q: SegmentedRawMuxingListQueryParamsBuilder) => SegmentedRawMuxingListQueryParamsBuilder)): Promise<PaginationResponse<SegmentedRawMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: SegmentedRawMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SegmentedRawMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SegmentedRawMuxing>>('/encoding/encodings/{encoding_id}/muxings/segmented-raw', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SegmentedRawMuxing>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SegmentedRawMuxing(i));
      }
      return paginationResponse;
    });
  }
}
