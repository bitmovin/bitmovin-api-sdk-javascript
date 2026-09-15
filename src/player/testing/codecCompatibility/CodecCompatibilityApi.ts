import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import PccReport from '../../../models/PccReport';
import {PccReportGetQueryParams, PccReportGetQueryParamsBuilder} from './PccReportGetQueryParams';

/**
 * CodecCompatibilityApi - object-oriented interface
 * @export
 * @class CodecCompatibilityApi
 * @extends {BaseAPI}
 */
export default class CodecCompatibilityApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Codec Compatibility Report
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof CodecCompatibilityApi
   */
  public get(queryParameters?: PccReportGetQueryParams | ((q: PccReportGetQueryParamsBuilder) => PccReportGetQueryParamsBuilder)): Promise<PccReport> {
    let queryParams: PccReportGetQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PccReportGetQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PccReport>('/player/testing/codec-compatibility', {}, queryParams).then((response) => {
      return map(response, PccReport);
    });
  }
}
