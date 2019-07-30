import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ScheduledContentInsertion from '../../../../models/ScheduledContentInsertion';
import PaginationResponse from '../../../../models/PaginationResponse';
import { ScheduledContentInsertionListQueryParams, ScheduledContentInsertionListQueryParamsBuilder } from './ScheduledContentInsertionListQueryParams';

/**
 * ScheduledContentInsertionApi - object-oriented interface
 * @export
 * @class ScheduledContentInsertionApi
 * @extends {BaseAPI}
 */
export default class ScheduledContentInsertionApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Schedule A Content Insertion For a Live Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {ScheduledContentInsertion} scheduledContentInsertion The scheduled content insertions to be created
   * @throws {RequiredError}
   * @memberof ScheduledContentInsertionApi
   */
  public create(encodingId: string, scheduledContentInsertion?: ScheduledContentInsertion): Promise<ScheduledContentInsertion> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ScheduledContentInsertion>('/encoding/encodings/{encoding_id}/live/scheduled-content-insertion', pathParamMap, scheduledContentInsertion).then((response) => {
      return new ScheduledContentInsertion(response);
    });
  }

  /**
   * @summary Deschedule A Content Insertion
   * @param {string} encodingId Id of the encoding.
   * @param {string} contentInsertionId Id of the scheduled content insertion
   * @throws {RequiredError}
   * @memberof ScheduledContentInsertionApi
   */
  public delete(encodingId: string, contentInsertionId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      content_insertion_id: contentInsertionId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/live/scheduled-content-insertion/{content_insertion_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Delete All Scheduled Content Insertions For A Live Encoding
   * @param {string} encodingId Id of the encoding
   * @throws {RequiredError}
   * @memberof ScheduledContentInsertionApi
   */
  public deleteByEncodingId(encodingId: string): Promise<Response> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.delete<Response>('/encoding/encodings/{encoding_id}/live/scheduled-content-insertion', pathParamMap).then((response) => {
      return response;
    });
  }

  /**
   * @summary List All Scheduled Content Insertions For A Live Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ScheduledContentInsertionApi
   */
  public list(encodingId: string, queryParameters?: ScheduledContentInsertionListQueryParams | ((q: ScheduledContentInsertionListQueryParamsBuilder) => ScheduledContentInsertionListQueryParamsBuilder)): Promise<PaginationResponse<ScheduledContentInsertion>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ScheduledContentInsertionListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new ScheduledContentInsertionListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ScheduledContentInsertion>>('/encoding/encodings/{encoding_id}/live/scheduled-content-insertion', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ScheduledContentInsertion>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ScheduledContentInsertion(i));
      }
      return paginationResponse;
    });
  }
}
