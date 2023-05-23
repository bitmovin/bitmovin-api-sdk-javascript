import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CloudRegion from '../../../models/CloudRegion';
import Encoding from '../../../models/Encoding';
import EncodingMode from '../../../models/EncodingMode';
import HistoryEncoding from '../../../models/HistoryEncoding';
import PaginationResponse from '../../../models/PaginationResponse';
import {EncodingListQueryParams, EncodingListQueryParamsBuilder} from './EncodingListQueryParams';

/**
 * EncodingsApi - object-oriented interface
 * @export
 * @class EncodingsApi
 * @extends {BaseAPI}
 */
export default class EncodingsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary (Experimental) History Encoding Details
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public get(encodingId: string): Promise<HistoryEncoding> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<HistoryEncoding>('/encoding/history/encodings/{encoding_id}', pathParamMap).then((response) => {
      return map(response, HistoryEncoding);
    });
  }

  /**
   * @summary (Experimental) List all History Encodings
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public list(queryParameters?: EncodingListQueryParams | ((q: EncodingListQueryParamsBuilder) => EncodingListQueryParamsBuilder)): Promise<PaginationResponse<Encoding>> {
    let queryParams: EncodingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EncodingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Encoding>>('/encoding/history/encodings', {}, queryParams).then((response) => {
      return new PaginationResponse<Encoding>(response, Encoding);
    });
  }
}
