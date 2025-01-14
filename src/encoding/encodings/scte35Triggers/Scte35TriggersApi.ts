import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import BitmovinResponse from '../../../models/BitmovinResponse';
import Scte35Trigger from '../../../models/Scte35Trigger';
import PaginationResponse from '../../../models/PaginationResponse';
import {Scte35TriggerListQueryParams, Scte35TriggerListQueryParamsBuilder} from './Scte35TriggerListQueryParams';

/**
 * Scte35TriggersApi - object-oriented interface
 * @export
 * @class Scte35TriggersApi
 * @extends {BaseAPI}
 */
export default class Scte35TriggersApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create SCTE 35 trigger
   * @param {string} encodingId Id of the encoding.
   * @param {Scte35Trigger} scte35Trigger The SCTE 35 trigger to be created
   * @throws {BitmovinError}
   * @memberof Scte35TriggersApi
   */
  public create(encodingId: string, scte35Trigger?: Scte35Trigger): Promise<Scte35Trigger> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Scte35Trigger>('/encoding/encodings/{encoding_id}/scte-35-triggers', pathParamMap, scte35Trigger).then((response) => {
      return map(response, Scte35Trigger);
    });
  }

  /**
   * @summary Delete SCTE 35 trigger
   * @param {string} encodingId Id of the encoding
   * @param {string} scte35triggerId Id of the SCTE 35 trigger
   * @throws {BitmovinError}
   * @memberof Scte35TriggersApi
   */
  public delete(encodingId: string, scte35triggerId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      scte35trigger_id: scte35triggerId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/scte-35-triggers/{scte35trigger_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary SCTE 35 trigger Details
   * @param {string} encodingId Id of the encoding
   * @param {string} scte35triggerId Id of the SCTE 35 trigger
   * @throws {BitmovinError}
   * @memberof Scte35TriggersApi
   */
  public get(encodingId: string, scte35triggerId: string): Promise<Scte35Trigger> {
    const pathParamMap = {
      encoding_id: encodingId,
      scte35trigger_id: scte35triggerId
    };
    return this.restClient.get<Scte35Trigger>('/encoding/encodings/{encoding_id}/scte-35-triggers/{scte35trigger_id}', pathParamMap).then((response) => {
      return map(response, Scte35Trigger);
    });
  }

  /**
   * @summary List all SCTE 35 triggers for an encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Scte35TriggersApi
   */
  public list(encodingId: string, queryParameters?: Scte35TriggerListQueryParams | ((q: Scte35TriggerListQueryParamsBuilder) => Scte35TriggerListQueryParamsBuilder)): Promise<PaginationResponse<Scte35Trigger>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: Scte35TriggerListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Scte35TriggerListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Scte35Trigger>>('/encoding/encodings/{encoding_id}/scte-35-triggers', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Scte35Trigger>(response, Scte35Trigger);
    });
  }
}
