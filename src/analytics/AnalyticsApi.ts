import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import ExportsApi from './exports/ExportsApi';
import ImpressionsApi from './impressions/ImpressionsApi';
import MetricsApi from './metrics/MetricsApi';
import AdsApi from './ads/AdsApi';
import QueriesApi from './queries/QueriesApi';
import LicensesApi from './licenses/LicensesApi';
import OutputsApi from './outputs/OutputsApi';

/**
 * AnalyticsApi - object-oriented interface
 * @export
 * @class AnalyticsApi
 * @extends {BaseAPI}
 */
export default class AnalyticsApi extends BaseAPI {
  public exports: ExportsApi;
  public impressions: ImpressionsApi;
  public metrics: MetricsApi;
  public ads: AdsApi;
  public queries: QueriesApi;
  public licenses: LicensesApi;
  public outputs: OutputsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.exports = new ExportsApi(configuration);
    this.impressions = new ImpressionsApi(configuration);
    this.metrics = new MetricsApi(configuration);
    this.ads = new AdsApi(configuration);
    this.queries = new QueriesApi(configuration);
    this.licenses = new LicensesApi(configuration);
    this.outputs = new OutputsApi(configuration);
  }
}
