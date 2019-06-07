import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import BitmovinResponseList from '../../../../models/BitmovinResponseList';
import StreamFilter from '../../../../models/StreamFilter';
import StreamFilterList from '../../../../models/StreamFilterList';
import StreamFilterListListQueryParams from './StreamFilterListListQueryParams';

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
   * @param {Array<StreamFilter>} streamFilter
   * @throws {RequiredError}
   * @memberof FiltersApi
   */
  public create(encodingId: string, streamId: string, streamFilter?: Array<StreamFilter>): Promise<StreamFilterList> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<StreamFilterList>('/encoding/encodings/{encoding_id}/streams/{stream_id}/filters', pathParamMap, streamFilter).then((response) => {
      return new StreamFilterList(response);
    });
  }

  /**
   * @summary Delete Specific Filter from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} filterId Id of the filter
   * @throws {RequiredError}
   * @memberof FiltersApi
   */
  public delete(encodingId: string, streamId: string, filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/filters/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Delete All Filters from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @throws {RequiredError}
   * @memberof FiltersApi
   */
  public deleteAll(encodingId: string, streamId: string): Promise<BitmovinResponseList> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.delete<BitmovinResponseList>('/encoding/encodings/{encoding_id}/streams/{stream_id}/filters', pathParamMap).then((response) => {
      return new BitmovinResponseList(response);
    });
  }

  /**
   * @summary List the filters of a stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof FiltersApi
   */
  public list(encodingId: string, streamId: string, queryParams?: StreamFilterListListQueryParams): Promise<StreamFilterList> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<StreamFilterList>('/encoding/encodings/{encoding_id}/streams/{stream_id}/filters', pathParamMap, queryParams).then((response) => {
      return new StreamFilterList(response);
    });
  }
}
