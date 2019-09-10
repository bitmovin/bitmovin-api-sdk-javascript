import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import SegmentedRawMuxing from '../../../../models/SegmentedRawMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {SegmentedRawMuxingListQueryParams, SegmentedRawMuxingListQueryParamsBuilder} from './SegmentedRawMuxingListQueryParams';

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
   * @throws {BitmovinError}
   * @memberof SegmentedRawApi
   */
  public create(encodingId: string, segmentedRawMuxing?: SegmentedRawMuxing): Promise<SegmentedRawMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<SegmentedRawMuxing>('/encoding/encodings/{encoding_id}/muxings/segmented-raw', pathParamMap, segmentedRawMuxing).then((response) => {
      return map(response, SegmentedRawMuxing);
    });
  }

  /**
   * @summary Delete Segmented RAW Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Segmented RAW muxing
   * @throws {BitmovinError}
   * @memberof SegmentedRawApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/segmented-raw/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Segmented RAW Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Segmented RAW muxing
   * @throws {BitmovinError}
   * @memberof SegmentedRawApi
   */
  public get(encodingId: string, muxingId: string): Promise<SegmentedRawMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<SegmentedRawMuxing>('/encoding/encodings/{encoding_id}/muxings/segmented-raw/{muxing_id}', pathParamMap).then((response) => {
      return map(response, SegmentedRawMuxing);
    });
  }

  /**
   * @summary List Segmented RAW Muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
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
      return new PaginationResponse<SegmentedRawMuxing>(response, SegmentedRawMuxing);
    });
  }
}
