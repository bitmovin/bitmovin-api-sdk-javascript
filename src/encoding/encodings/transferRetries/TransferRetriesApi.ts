import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import TransferRetry from '../../../models/TransferRetry';
import PaginationResponse from '../../../models/PaginationResponse';
import {TransferRetryListQueryParams, TransferRetryListQueryParamsBuilder} from './TransferRetryListQueryParams';

/**
 * TransferRetriesApi - object-oriented interface
 * @export
 * @class TransferRetriesApi
 * @extends {BaseAPI}
 */
export default class TransferRetriesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Starts transfer retry. A transfer retry is only possible within 72 hours.
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof TransferRetriesApi
   */
  public create(encodingId: string): Promise<TransferRetry> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<TransferRetry>('/encoding/encodings/{encoding_id}/transfer-retries', pathParamMap).then((response) => {
      return map(response, TransferRetry);
    });
  }

  /**
   * @summary Transfer retry Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} transferRetryId Id of the transfer-retry.
   * @throws {BitmovinError}
   * @memberof TransferRetriesApi
   */
  public get(encodingId: string, transferRetryId: string): Promise<TransferRetry> {
    const pathParamMap = {
      encoding_id: encodingId,
      transfer_retry_id: transferRetryId
    };
    return this.restClient.get<TransferRetry>('/encoding/encodings/{encoding_id}/transfer-retries/{transfer_retry_id}', pathParamMap).then((response) => {
      return map(response, TransferRetry);
    });
  }

  /**
   * @summary List transfer-retries
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof TransferRetriesApi
   */
  public list(encodingId: string, queryParameters?: TransferRetryListQueryParams | ((q: TransferRetryListQueryParamsBuilder) => TransferRetryListQueryParamsBuilder)): Promise<PaginationResponse<TransferRetry>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: TransferRetryListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new TransferRetryListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<TransferRetry>>('/encoding/encodings/{encoding_id}/transfer-retries', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<TransferRetry>(response, TransferRetry);
    });
  }
}
