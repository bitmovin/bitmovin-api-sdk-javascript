import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CdnOutput from '../../../models/CdnOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {CdnOutputListQueryParams, CdnOutputListQueryParamsBuilder} from './CdnOutputListQueryParams';

/**
 * CdnApi - object-oriented interface
 * @export
 * @class CdnApi
 * @extends {BaseAPI}
 */
export default class CdnApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary CDN Output Details
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof CdnApi
   */
  public get(outputId: string): Promise<CdnOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<CdnOutput>('/encoding/outputs/cdn/{output_id}', pathParamMap).then((response) => {
      return map(response, CdnOutput);
    });
  }

  /**
   * @summary List CDN Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof CdnApi
   */
  public list(queryParameters?: CdnOutputListQueryParams | ((q: CdnOutputListQueryParamsBuilder) => CdnOutputListQueryParamsBuilder)): Promise<PaginationResponse<CdnOutput>> {
    let queryParams: CdnOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new CdnOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<CdnOutput>>('/encoding/outputs/cdn', {}, queryParams).then((response) => {
      return new PaginationResponse<CdnOutput>(response, CdnOutput);
    });
  }
}
