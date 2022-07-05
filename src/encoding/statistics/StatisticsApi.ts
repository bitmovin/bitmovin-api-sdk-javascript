import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import CdnApi from './cdn/CdnApi';
import DailyApi from './daily/DailyApi';
import EncodingsApi from './encodings/EncodingsApi';
import LabelsApi from './labels/LabelsApi';
import Statistics from '../../models/Statistics';
import PaginationResponse from '../../models/PaginationResponse';
import {StatisticsListQueryParams, StatisticsListQueryParamsBuilder} from './StatisticsListQueryParams';

/**
 * StatisticsApi - object-oriented interface
 * @export
 * @class StatisticsApi
 * @extends {BaseAPI}
 */
export default class StatisticsApi extends BaseAPI {
  public cdn: CdnApi;
  public daily: DailyApi;
  public encodings: EncodingsApi;
  public labels: LabelsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.cdn = new CdnApi(configuration);
    this.daily = new DailyApi(configuration);
    this.encodings = new EncodingsApi(configuration);
    this.labels = new LabelsApi(configuration);
  }

  /**
   * @summary Show Overall Statistics
   * @throws {BitmovinError}
   * @memberof StatisticsApi
   */
  public get(): Promise<Statistics> {
    return this.restClient.get<Statistics>('/encoding/statistics', {}).then((response) => {
      return map(response, Statistics);
    });
  }

  /**
   * @summary Show Overall Statistics Within Specific Dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof StatisticsApi
   */
  public list(from: Date, to: Date, queryParameters?: StatisticsListQueryParams | ((q: StatisticsListQueryParamsBuilder) => StatisticsListQueryParamsBuilder)): Promise<PaginationResponse<Statistics>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    let queryParams: StatisticsListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StatisticsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Statistics>>('/encoding/statistics/{from}/{to}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Statistics>(response, Statistics);
    });
  }
}
