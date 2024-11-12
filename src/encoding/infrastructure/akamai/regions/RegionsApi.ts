import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AkamaiAccountRegionSettings from '../../../../models/AkamaiAccountRegionSettings';
import AkamaiCloudRegion from '../../../../models/AkamaiCloudRegion';
import PaginationResponse from '../../../../models/PaginationResponse';
import {AkamaiAccountRegionSettingsListQueryParams, AkamaiAccountRegionSettingsListQueryParamsBuilder} from './AkamaiAccountRegionSettingsListQueryParams';

/**
 * RegionsApi - object-oriented interface
 * @export
 * @class RegionsApi
 * @extends {BaseAPI}
 */
export default class RegionsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Akamai account region settings
   * @param {string} infrastructureId Id of the Akamai account
   * @param {AkamaiCloudRegion} region Akamai region
   * @param {AkamaiAccountRegionSettings} akamaiAccountRegionSettings The Akamai account region settings to be added
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public create(infrastructureId: string, region: AkamaiCloudRegion, akamaiAccountRegionSettings?: AkamaiAccountRegionSettings): Promise<AkamaiAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.post<AkamaiAccountRegionSettings>('/encoding/infrastructure/akamai/{infrastructure_id}/regions/{region}', pathParamMap, akamaiAccountRegionSettings).then((response) => {
      return map(response, AkamaiAccountRegionSettings);
    });
  }

  /**
   * @summary Delete Akamai account region settings
   * @param {string} infrastructureId Id of the Akamai account
   * @param {AkamaiCloudRegion} region Akamai region
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public delete(infrastructureId: string, region: AkamaiCloudRegion): Promise<AkamaiAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.delete<AkamaiAccountRegionSettings>('/encoding/infrastructure/akamai/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return map(response, AkamaiAccountRegionSettings);
    });
  }

  /**
   * @summary Akamai account region settings details
   * @param {string} infrastructureId Id of the Akamai account
   * @param {AkamaiCloudRegion} region Akamai region
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public get(infrastructureId: string, region: AkamaiCloudRegion): Promise<AkamaiAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.get<AkamaiAccountRegionSettings>('/encoding/infrastructure/akamai/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return map(response, AkamaiAccountRegionSettings);
    });
  }

  /**
   * @summary List Akamai account region settings
   * @param {string} infrastructureId Id of the Akamai account
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public list(infrastructureId: string, queryParameters?: AkamaiAccountRegionSettingsListQueryParams | ((q: AkamaiAccountRegionSettingsListQueryParamsBuilder) => AkamaiAccountRegionSettingsListQueryParamsBuilder)): Promise<PaginationResponse<AkamaiAccountRegionSettings>> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    let queryParams: AkamaiAccountRegionSettingsListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AkamaiAccountRegionSettingsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AkamaiAccountRegionSettings>>('/encoding/infrastructure/akamai/{infrastructure_id}/regions', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<AkamaiAccountRegionSettings>(response, AkamaiAccountRegionSettings);
    });
  }
}
