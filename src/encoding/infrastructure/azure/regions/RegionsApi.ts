import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AzureAccountRegionSettings from '../../../../models/AzureAccountRegionSettings';
import AzureCloudRegion from '../../../../models/AzureCloudRegion';
import PaginationResponse from '../../../../models/PaginationResponse';
import {AzureAccountRegionSettingsListQueryParams, AzureAccountRegionSettingsListQueryParamsBuilder} from './AzureAccountRegionSettingsListQueryParams';

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
   * @summary Add Azure Region Setting
   * @param {string} infrastructureId Id of the Azure account
   * @param {AzureCloudRegion} region Azure region.
   * @param {AzureAccountRegionSettings} azureAccountRegionSettings The Azure Region Settings to be added
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public create(infrastructureId: string, region: AzureCloudRegion, azureAccountRegionSettings?: AzureAccountRegionSettings): Promise<AzureAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.post<AzureAccountRegionSettings>('/encoding/infrastructure/azure/{infrastructure_id}/regions/{region}', pathParamMap, azureAccountRegionSettings).then((response) => {
      return map(response, AzureAccountRegionSettings);
    });
  }

  /**
   * @summary Delete Azure Region Settings
   * @param {string} infrastructureId Id of the Azure account
   * @param {AzureCloudRegion} region Azure region.
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public delete(infrastructureId: string, region: AzureCloudRegion): Promise<AzureAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.delete<AzureAccountRegionSettings>('/encoding/infrastructure/azure/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return map(response, AzureAccountRegionSettings);
    });
  }

  /**
   * @summary Azure Region Settings Details
   * @param {string} infrastructureId Id of the Azure account
   * @param {AzureCloudRegion} region Azure region.
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public get(infrastructureId: string, region: AzureCloudRegion): Promise<AzureAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.get<AzureAccountRegionSettings>('/encoding/infrastructure/azure/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return map(response, AzureAccountRegionSettings);
    });
  }

  /**
   * @summary List Azure Region Settings
   * @param {string} infrastructureId Id of the Azure account
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public list(infrastructureId: string, queryParameters?: AzureAccountRegionSettingsListQueryParams | ((q: AzureAccountRegionSettingsListQueryParamsBuilder) => AzureAccountRegionSettingsListQueryParamsBuilder)): Promise<PaginationResponse<AzureAccountRegionSettings>> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    let queryParams: AzureAccountRegionSettingsListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AzureAccountRegionSettingsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AzureAccountRegionSettings>>('/encoding/infrastructure/azure/{infrastructure_id}/regions', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<AzureAccountRegionSettings>(response, AzureAccountRegionSettings);
    });
  }
}
