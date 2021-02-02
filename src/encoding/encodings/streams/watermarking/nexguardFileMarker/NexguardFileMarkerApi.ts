import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import NexGuardFileMarker from '../../../../../models/NexGuardFileMarker';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {NexGuardFileMarkerListQueryParams, NexGuardFileMarkerListQueryParamsBuilder} from './NexGuardFileMarkerListQueryParams';

/**
 * NexguardFileMarkerApi - object-oriented interface
 * @export
 * @class NexguardFileMarkerApi
 * @extends {BaseAPI}
 */
export default class NexguardFileMarkerApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add a nexguard file marker watermarking configurations
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {NexGuardFileMarker} nexGuardFileMarker The nexguard file marker configurations
   * @throws {BitmovinError}
   * @memberof NexguardFileMarkerApi
   */
  public create(encodingId: string, streamId: string, nexGuardFileMarker?: NexGuardFileMarker): Promise<NexGuardFileMarker> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<NexGuardFileMarker>('/encoding/encodings/{encoding_id}/streams/{stream_id}/watermarking/nexguard-file-marker', pathParamMap, nexGuardFileMarker).then((response) => {
      return map(response, NexGuardFileMarker);
    });
  }

  /**
   * @summary Delete nexguard file marker watermarking configurations
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} nexguardId Id of the nexguard file marker watermarking configurations
   * @throws {BitmovinError}
   * @memberof NexguardFileMarkerApi
   */
  public delete(encodingId: string, streamId: string, nexguardId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      nexguard_id: nexguardId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/watermarking/nexguard-file-marker/{nexguard_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Nexguard file marker watermarking configurations details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} nexguardId Id of the nexguard file marker watermarking configurations.
   * @throws {BitmovinError}
   * @memberof NexguardFileMarkerApi
   */
  public get(encodingId: string, streamId: string, nexguardId: string): Promise<NexGuardFileMarker> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      nexguard_id: nexguardId
    };
    return this.restClient.get<NexGuardFileMarker>('/encoding/encodings/{encoding_id}/streams/{stream_id}/watermarking/nexguard-file-marker/{nexguard_id}', pathParamMap).then((response) => {
      return map(response, NexGuardFileMarker);
    });
  }

  /**
   * @summary List nexguard file marker watermarking configurations
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof NexguardFileMarkerApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: NexGuardFileMarkerListQueryParams | ((q: NexGuardFileMarkerListQueryParamsBuilder) => NexGuardFileMarkerListQueryParamsBuilder)): Promise<PaginationResponse<NexGuardFileMarker>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: NexGuardFileMarkerListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new NexGuardFileMarkerListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<NexGuardFileMarker>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/watermarking/nexguard-file-marker', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<NexGuardFileMarker>(response, NexGuardFileMarker);
    });
  }
}
