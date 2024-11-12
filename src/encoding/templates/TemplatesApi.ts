import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import BitmovinResponse from '../../models/BitmovinResponse';
import EncodingTemplateDetails from '../../models/EncodingTemplateDetails';
import EncodingTemplateRequest from '../../models/EncodingTemplateRequest';
import EncodingTemplateResponse from '../../models/EncodingTemplateResponse';
import EncodingTemplateStartResponse from '../../models/EncodingTemplateStartResponse';
import EncodingTemplateType from '../../models/EncodingTemplateType';
import PaginationResponse from '../../models/PaginationResponse';
import {EncodingTemplateResponseListQueryParams, EncodingTemplateResponseListQueryParamsBuilder} from './EncodingTemplateResponseListQueryParams';

/**
 * TemplatesApi - object-oriented interface
 * @export
 * @class TemplatesApi
 * @extends {BaseAPI}
 */
export default class TemplatesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Store an Encoding Template
   * @param {any} encodingTemplateRequest The Encoding Template to be stored
   * @throws {BitmovinError}
   * @memberof TemplatesApi
   */
  public create(encodingTemplateRequest?: any): Promise<EncodingTemplateDetails> {
    return this.restClient.post<EncodingTemplateDetails>('/encoding/templates', {}, encodingTemplateRequest).then((response) => {
      return map(response, EncodingTemplateDetails);
    });
  }

  /**
   * @summary Delete Encoding Template
   * @param {string} encodingTemplateId Id of the encoding template to delete
   * @throws {BitmovinError}
   * @memberof TemplatesApi
   */
  public delete(encodingTemplateId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_template_id: encodingTemplateId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/templates/{encoding_template_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Encoding Template details
   * @param {string} encodingTemplateId Id of the Encoding Template
   * @throws {BitmovinError}
   * @memberof TemplatesApi
   */
  public get(encodingTemplateId: string): Promise<EncodingTemplateDetails> {
    const pathParamMap = {
      encoding_template_id: encodingTemplateId
    };
    return this.restClient.get<EncodingTemplateDetails>('/encoding/templates/{encoding_template_id}', pathParamMap).then((response) => {
      return map(response, EncodingTemplateDetails);
    });
  }

  /**
   * @summary List stored Encoding Templates
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof TemplatesApi
   */
  public list(queryParameters?: EncodingTemplateResponseListQueryParams | ((q: EncodingTemplateResponseListQueryParamsBuilder) => EncodingTemplateResponseListQueryParamsBuilder)): Promise<PaginationResponse<EncodingTemplateResponse>> {
    let queryParams: EncodingTemplateResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EncodingTemplateResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EncodingTemplateResponse>>('/encoding/templates', {}, queryParams).then((response) => {
      return new PaginationResponse<EncodingTemplateResponse>(response, EncodingTemplateResponse);
    });
  }

  /**
   * @summary BETA: Start an Encoding defined with an Encoding Template
   * @param {any} encodingTemplateRequest The Encoding Template to start an Encoding from
   * @throws {BitmovinError}
   * @memberof TemplatesApi
   */
  public start(encodingTemplateRequest?: any): Promise<EncodingTemplateStartResponse> {
    return this.restClient.post<EncodingTemplateStartResponse>('/encoding/templates/start', {}, encodingTemplateRequest).then((response) => {
      return map(response, EncodingTemplateStartResponse);
    });
  }
}
