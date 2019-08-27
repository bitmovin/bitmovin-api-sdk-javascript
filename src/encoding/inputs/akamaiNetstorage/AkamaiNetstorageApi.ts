import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import AkamaiNetStorageInput from '../../../models/AkamaiNetStorageInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {AkamaiNetStorageInputListQueryParams, AkamaiNetStorageInputListQueryParamsBuilder} from './AkamaiNetStorageInputListQueryParams';

/**
 * AkamaiNetstorageApi - object-oriented interface
 * @export
 * @class AkamaiNetstorageApi
 * @extends {BaseAPI}
 */
export default class AkamaiNetstorageApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Akamai NetStorage Input
   * @param {AkamaiNetStorageInput} akamaiNetStorageInput The Akamai NetStorage input to be created
   * @throws {RequiredError}
   * @memberof AkamaiNetstorageApi
   */
  public create(akamaiNetStorageInput?: AkamaiNetStorageInput): Promise<AkamaiNetStorageInput> {
    return this.restClient.post<AkamaiNetStorageInput>('/encoding/inputs/akamai-netstorage', {}, akamaiNetStorageInput).then((response) => {
      return new AkamaiNetStorageInput(response);
    });
  }

  /**
   * @summary Delete Akamai NetStorage Input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof AkamaiNetstorageApi
   */
  public delete(inputId: string): Promise<AkamaiNetStorageInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<AkamaiNetStorageInput>('/encoding/inputs/akamai-netstorage/{input_id}', pathParamMap).then((response) => {
      return new AkamaiNetStorageInput(response);
    });
  }

  /**
   * @summary Akamai NetStorage Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof AkamaiNetstorageApi
   */
  public get(inputId: string): Promise<AkamaiNetStorageInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<AkamaiNetStorageInput>('/encoding/inputs/akamai-netstorage/{input_id}', pathParamMap).then((response) => {
      return new AkamaiNetStorageInput(response);
    });
  }

  /**
   * @summary List Akamai NetStorage Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AkamaiNetstorageApi
   */
  public list(queryParameters?: AkamaiNetStorageInputListQueryParams | ((q: AkamaiNetStorageInputListQueryParamsBuilder) => AkamaiNetStorageInputListQueryParamsBuilder)): Promise<PaginationResponse<AkamaiNetStorageInput>> {
    let queryParams: AkamaiNetStorageInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AkamaiNetStorageInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AkamaiNetStorageInput>>('/encoding/inputs/akamai-netstorage', {}, queryParams).then((response) => {
      return new PaginationResponse<AkamaiNetStorageInput>(response, AkamaiNetStorageInput);;
    });
  }
}
