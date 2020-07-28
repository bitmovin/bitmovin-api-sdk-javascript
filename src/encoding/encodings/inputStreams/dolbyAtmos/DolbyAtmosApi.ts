import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import DolbyAtmosIngestInputStream from '../../../../models/DolbyAtmosIngestInputStream';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DolbyAtmosIngestInputStreamListQueryParams, DolbyAtmosIngestInputStreamListQueryParamsBuilder} from './DolbyAtmosIngestInputStreamListQueryParams';

/**
 * DolbyAtmosApi - object-oriented interface
 * @export
 * @class DolbyAtmosApi
 * @extends {BaseAPI}
 */
export default class DolbyAtmosApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Dolby Atmos input stream
   * @param {string} encodingId Id of the encoding
   * @param {DolbyAtmosIngestInputStream} dolbyAtmosIngestInputStream The Dolby Atmos input stream to be created
   * @throws {BitmovinError}
   * @memberof DolbyAtmosApi
   */
  public create(encodingId: string, dolbyAtmosIngestInputStream?: DolbyAtmosIngestInputStream): Promise<DolbyAtmosIngestInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<DolbyAtmosIngestInputStream>('/encoding/encodings/{encoding_id}/input-streams/dolby-atmos', pathParamMap, dolbyAtmosIngestInputStream).then((response) => {
      return map(response, DolbyAtmosIngestInputStream);
    });
  }

  /**
   * @summary Delete Dolby Atmos input stream
   * @param {string} encodingId Id of the encoding
   * @param {string} inputStreamId Id of the Dolby Atmos input stream
   * @throws {BitmovinError}
   * @memberof DolbyAtmosApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/dolby-atmos/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Dolby Atmos input stream details
   * @param {string} encodingId Id of the encoding
   * @param {string} inputStreamId Id of the Dolby Atmos input stream
   * @throws {BitmovinError}
   * @memberof DolbyAtmosApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<DolbyAtmosIngestInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<DolbyAtmosIngestInputStream>('/encoding/encodings/{encoding_id}/input-streams/dolby-atmos/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, DolbyAtmosIngestInputStream);
    });
  }

  /**
   * @summary List Dolby Atmos input streams
   * @param {string} encodingId Id of the encoding
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DolbyAtmosApi
   */
  public list(encodingId: string, queryParameters?: DolbyAtmosIngestInputStreamListQueryParams | ((q: DolbyAtmosIngestInputStreamListQueryParamsBuilder) => DolbyAtmosIngestInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<DolbyAtmosIngestInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: DolbyAtmosIngestInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DolbyAtmosIngestInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DolbyAtmosIngestInputStream>>('/encoding/encodings/{encoding_id}/input-streams/dolby-atmos', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DolbyAtmosIngestInputStream>(response, DolbyAtmosIngestInputStream);
    });
  }
}
