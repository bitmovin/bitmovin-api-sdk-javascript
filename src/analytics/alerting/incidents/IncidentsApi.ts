import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsIncident from '../../../models/AnalyticsIncident';
import PaginationResponse from '../../../models/PaginationResponse';
import {AnalyticsIncidentListQueryParams, AnalyticsIncidentListQueryParamsBuilder} from './AnalyticsIncidentListQueryParams';
import {AnalyticsIncidentListByLicenseKeyQueryParams, AnalyticsIncidentListByLicenseKeyQueryParamsBuilder} from './AnalyticsIncidentListByLicenseKeyQueryParams';

/**
 * IncidentsApi - object-oriented interface
 * @export
 * @class IncidentsApi
 * @extends {BaseAPI}
 */
export default class IncidentsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Incidents
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof IncidentsApi
   */
  public list(queryParameters?: AnalyticsIncidentListQueryParams | ((q: AnalyticsIncidentListQueryParamsBuilder) => AnalyticsIncidentListQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsIncident>> {
    let queryParams: AnalyticsIncidentListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsIncidentListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsIncident>>('/analytics/alerting/incidents', {}, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsIncident>(response, AnalyticsIncident);
    });
  }

  /**
   * @summary List Incidents per license
   * @param {string} licenseKey License key
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof IncidentsApi
   */
  public listByLicenseKey(licenseKey: string, queryParameters?: AnalyticsIncidentListByLicenseKeyQueryParams | ((q: AnalyticsIncidentListByLicenseKeyQueryParamsBuilder) => AnalyticsIncidentListByLicenseKeyQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsIncident>> {
    const pathParamMap = {
      license_key: licenseKey
    };
    let queryParams: AnalyticsIncidentListByLicenseKeyQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsIncidentListByLicenseKeyQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsIncident>>('/analytics/alerting/incidents/{license_key}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsIncident>(response, AnalyticsIncident);
    });
  }
}
