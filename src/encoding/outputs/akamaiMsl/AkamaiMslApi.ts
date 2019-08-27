import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import AkamaiMslOutput from '../../../models/AkamaiMslOutput';
import BitmovinResponse from '../../../models/BitmovinResponse';
import PaginationResponse from '../../../models/PaginationResponse';
import {AkamaiMslOutputListQueryParams, AkamaiMslOutputListQueryParamsBuilder} from './AkamaiMslOutputListQueryParams';

/**
 * AkamaiMslApi - object-oriented interface
 * @export
 * @class AkamaiMslApi
 * @extends {BaseAPI}
 */
export default class AkamaiMslApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Akamai MSL Output
   * @param {AkamaiMslOutput} akamaiMslOutput The Akamai MSL output to be created
   * @throws {RequiredError}
   * @memberof AkamaiMslApi
   */
  public create(akamaiMslOutput?: AkamaiMslOutput): Promise<AkamaiMslOutput> {
    return this.restClient.post<AkamaiMslOutput>('/encoding/outputs/akamai-msl', {}, akamaiMslOutput).then((response) => {
      return new AkamaiMslOutput(response);
    });
  }

  /**
   * @summary Delete Akamai MSL Output
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof AkamaiMslApi
   */
  public delete(outputId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/outputs/akamai-msl/{output_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Akamai MSL Output Details
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof AkamaiMslApi
   */
  public get(outputId: string): Promise<AkamaiMslOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<AkamaiMslOutput>('/encoding/outputs/akamai-msl/{output_id}', pathParamMap).then((response) => {
      return new AkamaiMslOutput(response);
    });
  }

  /**
   * @summary List Akamai MSL Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AkamaiMslApi
   */
  public list(queryParameters?: AkamaiMslOutputListQueryParams | ((q: AkamaiMslOutputListQueryParamsBuilder) => AkamaiMslOutputListQueryParamsBuilder)): Promise<PaginationResponse<AkamaiMslOutput>> {
    let queryParams: AkamaiMslOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AkamaiMslOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AkamaiMslOutput>>('/encoding/outputs/akamai-msl', {}, queryParams).then((response) => {
      return new PaginationResponse<AkamaiMslOutput>(response, AkamaiMslOutput);;
    });
  }
}
