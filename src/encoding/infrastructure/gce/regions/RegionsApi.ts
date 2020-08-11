import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import GceAccountRegionSettings from '../../../../models/GceAccountRegionSettings';
import GoogleCloudRegion from '../../../../models/GoogleCloudRegion';
import PaginationResponse from '../../../../models/PaginationResponse';
import {GceAccountRegionSettingsListQueryParams, GceAccountRegionSettingsListQueryParamsBuilder} from './GceAccountRegionSettingsListQueryParams';

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
   * @summary Add Google Cloud Region Setting
   * @param {string} infrastructureId Id of the Google Cloud Connect infrastructure resource
   * @param {GoogleCloudRegion} region Google Cloud Region.
   * @param {GceAccountRegionSettings} gceAccountRegionSettings The Google Cloud Region Settings to be added
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public create(infrastructureId: string, region: GoogleCloudRegion, gceAccountRegionSettings?: GceAccountRegionSettings): Promise<GceAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.post<GceAccountRegionSettings>('/encoding/infrastructure/gce/{infrastructure_id}/regions/{region}', pathParamMap, gceAccountRegionSettings).then((response) => {
      return map(response, GceAccountRegionSettings);
    });
  }

  /**
   * @summary Delete Google Cloud Region Settings
   * @param {string} infrastructureId Id of the Google Cloud Connect infrastructure resource
   * @param {GoogleCloudRegion} region Google Cloud Region
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public delete(infrastructureId: string, region: GoogleCloudRegion): Promise<GceAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.delete<GceAccountRegionSettings>('/encoding/infrastructure/gce/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return map(response, GceAccountRegionSettings);
    });
  }

  /**
   * @summary Google Cloud Region Settings Details
   * @param {string} infrastructureId Id of the Google Cloud Connect infrastructure resource
   * @param {GoogleCloudRegion} region Google Cloud region.
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public get(infrastructureId: string, region: GoogleCloudRegion): Promise<GceAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.get<GceAccountRegionSettings>('/encoding/infrastructure/gce/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return map(response, GceAccountRegionSettings);
    });
  }

  /**
   * @summary List Google Cloud Region Settings
   * @param {string} infrastructureId Id of the Google Cloud Connect infrastructure resource
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public list(infrastructureId: string, queryParameters?: GceAccountRegionSettingsListQueryParams | ((q: GceAccountRegionSettingsListQueryParamsBuilder) => GceAccountRegionSettingsListQueryParamsBuilder)): Promise<PaginationResponse<GceAccountRegionSettings>> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    let queryParams: GceAccountRegionSettingsListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new GceAccountRegionSettingsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<GceAccountRegionSettings>>('/encoding/infrastructure/gce/{infrastructure_id}/regions', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<GceAccountRegionSettings>(response, GceAccountRegionSettings);
    });
  }
}
