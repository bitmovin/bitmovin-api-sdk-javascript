import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import InformationApi from './information/InformationApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PackedAudioMuxing from '../../../../models/PackedAudioMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {PackedAudioMuxingListQueryParams, PackedAudioMuxingListQueryParamsBuilder} from './PackedAudioMuxingListQueryParams';

/**
 * PackedAudioApi - object-oriented interface
 * @export
 * @class PackedAudioApi
 * @extends {BaseAPI}
 */
export default class PackedAudioApi extends BaseAPI {
  public customdata: CustomdataApi;
  public information: InformationApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.information = new InformationApi(configuration);
  }

  /**
   * @summary Add Packed Audio muxing
   * @param {string} encodingId Id of the encoding.
   * @param {PackedAudioMuxing} packedAudioMuxing The Packed Audio muxing to be created
   * @throws {BitmovinError}
   * @memberof PackedAudioApi
   */
  public create(encodingId: string, packedAudioMuxing?: PackedAudioMuxing): Promise<PackedAudioMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<PackedAudioMuxing>('/encoding/encodings/{encoding_id}/muxings/packed-audio', pathParamMap, packedAudioMuxing).then((response) => {
      return map(response, PackedAudioMuxing);
    });
  }

  /**
   * @summary Delete Packed Audio muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Packed Audio muxing
   * @throws {BitmovinError}
   * @memberof PackedAudioApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/packed-audio/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Packed Audio muxing details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Packed Audio muxing
   * @throws {BitmovinError}
   * @memberof PackedAudioApi
   */
  public get(encodingId: string, muxingId: string): Promise<PackedAudioMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PackedAudioMuxing>('/encoding/encodings/{encoding_id}/muxings/packed-audio/{muxing_id}', pathParamMap).then((response) => {
      return map(response, PackedAudioMuxing);
    });
  }

  /**
   * @summary List Packed Audio muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof PackedAudioApi
   */
  public list(encodingId: string, queryParameters?: PackedAudioMuxingListQueryParams | ((q: PackedAudioMuxingListQueryParamsBuilder) => PackedAudioMuxingListQueryParamsBuilder)): Promise<PaginationResponse<PackedAudioMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: PackedAudioMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PackedAudioMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PackedAudioMuxing>>('/encoding/encodings/{encoding_id}/muxings/packed-audio', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<PackedAudioMuxing>(response, PackedAudioMuxing);
    });
  }
}
