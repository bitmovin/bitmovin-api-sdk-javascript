import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomXmlElementsApi from './customXmlElements/CustomXmlElementsApi';
import AdaptationsetsApi from './adaptationsets/AdaptationsetsApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Period from '../../../../models/Period';
import PaginationResponse from '../../../../models/PaginationResponse';
import {PeriodListQueryParams, PeriodListQueryParamsBuilder} from './PeriodListQueryParams';

/**
 * PeriodsApi - object-oriented interface
 * @export
 * @class PeriodsApi
 * @extends {BaseAPI}
 */
export default class PeriodsApi extends BaseAPI {
  public customXmlElements: CustomXmlElementsApi;
  public adaptationsets: AdaptationsetsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customXmlElements = new CustomXmlElementsApi(configuration);
    this.adaptationsets = new AdaptationsetsApi(configuration);
  }

  /**
   * @summary Add Period
   * @param {string} manifestId Id of the manifest
   * @param {Period} period The Period to be added to the manifest
   * @throws {BitmovinError}
   * @memberof PeriodsApi
   */
  public create(manifestId: string, period?: Period): Promise<Period> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<Period>('/encoding/manifests/dash/{manifest_id}/periods', pathParamMap, period).then((response) => {
      return map(response, Period);
    });
  }

  /**
   * @summary Delete Period
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period to be deleted
   * @throws {BitmovinError}
   * @memberof PeriodsApi
   */
  public delete(manifestId: string, periodId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Period Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @throws {BitmovinError}
   * @memberof PeriodsApi
   */
  public get(manifestId: string, periodId: string): Promise<Period> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    return this.restClient.get<Period>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}', pathParamMap).then((response) => {
      return map(response, Period);
    });
  }

  /**
   * @summary List all Periods
   * @param {string} manifestId Id of the manifest
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof PeriodsApi
   */
  public list(manifestId: string, queryParameters?: PeriodListQueryParams | ((q: PeriodListQueryParamsBuilder) => PeriodListQueryParamsBuilder)): Promise<PaginationResponse<Period>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: PeriodListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PeriodListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Period>>('/encoding/manifests/dash/{manifest_id}/periods', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Period>(response, Period);
    });
  }
}
