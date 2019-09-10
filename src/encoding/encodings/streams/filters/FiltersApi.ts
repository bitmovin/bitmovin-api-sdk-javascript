import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import BitmovinResponseList from '../../../../models/BitmovinResponseList';
import StreamFilter from '../../../../models/StreamFilter';
import StreamFilterList from '../../../../models/StreamFilterList';
import {StreamFilterListListQueryParams, StreamFilterListListQueryParamsBuilder} from './StreamFilterListListQueryParams';

/**
 * FiltersApi - object-oriented interface
 * @export
 * @class FiltersApi
 * @extends {BaseAPI}
 */
export default class FiltersApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Filters to Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {StreamFilter[]} streamFilter The Filters to be added
   * @throws {BitmovinError}
   * @memberof FiltersApi
   */
  public create(encodingId: string, streamId: string, streamFilter?: StreamFilter[]): Promise<StreamFilterList> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<StreamFilterList>('/encoding/encodings/{encoding_id}/streams/{stream_id}/filters', pathParamMap, streamFilter).then((response) => {
      return map(response, StreamFilterList);
    });
  }

  /**
   * @summary Delete Specific Filter from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} filterId Id of the filter
   * @throws {BitmovinError}
   * @memberof FiltersApi
   */
  public delete(encodingId: string, streamId: string, filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/filters/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Delete All Filters from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof FiltersApi
   */
  public deleteAll(encodingId: string, streamId: string): Promise<BitmovinResponseList> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.delete<BitmovinResponseList>('/encoding/encodings/{encoding_id}/streams/{stream_id}/filters', pathParamMap).then((response) => {
      return map(response, BitmovinResponseList);
    });
  }

  /**
   * @summary List the filters of a stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof FiltersApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: StreamFilterListListQueryParams | ((q: StreamFilterListListQueryParamsBuilder) => StreamFilterListListQueryParamsBuilder)): Promise<StreamFilterList> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: StreamFilterListListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamFilterListListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<StreamFilterList>('/encoding/encodings/{encoding_id}/streams/{stream_id}/filters', pathParamMap, queryParams).then((response) => {
      return map(response, StreamFilterList);
    });
  }
}
