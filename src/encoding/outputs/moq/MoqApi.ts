import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import MoqOutput from '../../../models/MoqOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {MoqOutputListQueryParams, MoqOutputListQueryParamsBuilder} from './MoqOutputListQueryParams';

/**
 * MoqApi - object-oriented interface
 * @export
 * @class MoqApi
 * @extends {BaseAPI}
 */
export default class MoqApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create MoQ Output
   * @param {MoqOutput} moqOutput The MoQ output to be created
   * @throws {BitmovinError}
   * @memberof MoqApi
   */
  public create(moqOutput?: MoqOutput): Promise<MoqOutput> {
    return this.restClient.post<MoqOutput>('/encoding/outputs/moq', {}, moqOutput).then((response) => {
      return map(response, MoqOutput);
    });
  }

  /**
   * @summary Delete MoQ Output
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof MoqApi
   */
  public delete(outputId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/outputs/moq/{output_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get MoQ Output details
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof MoqApi
   */
  public get(outputId: string): Promise<MoqOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<MoqOutput>('/encoding/outputs/moq/{output_id}', pathParamMap).then((response) => {
      return map(response, MoqOutput);
    });
  }

  /**
   * @summary List MoQ Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof MoqApi
   */
  public list(queryParameters?: MoqOutputListQueryParams | ((q: MoqOutputListQueryParamsBuilder) => MoqOutputListQueryParamsBuilder)): Promise<PaginationResponse<MoqOutput>> {
    let queryParams: MoqOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new MoqOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<MoqOutput>>('/encoding/outputs/moq', {}, queryParams).then((response) => {
      return new PaginationResponse<MoqOutput>(response, MoqOutput);
    });
  }
}
