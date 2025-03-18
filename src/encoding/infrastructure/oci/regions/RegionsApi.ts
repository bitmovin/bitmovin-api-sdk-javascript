import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import OciAccountRegionSettings from '../../../../models/OciAccountRegionSettings';
import OciCloudRegion from '../../../../models/OciCloudRegion';
import PaginationResponse from '../../../../models/PaginationResponse';
import {OciAccountRegionSettingsListQueryParams, OciAccountRegionSettingsListQueryParamsBuilder} from './OciAccountRegionSettingsListQueryParams';

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
   * @summary Add OCI account region settings
   * @param {string} infrastructureId Id of the OCI account
   * @param {OciCloudRegion} region OCI region
   * @param {OciAccountRegionSettings} ociAccountRegionSettings The OCI account region settings to be added
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public create(infrastructureId: string, region: OciCloudRegion, ociAccountRegionSettings?: OciAccountRegionSettings): Promise<OciAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.post<OciAccountRegionSettings>('/encoding/infrastructure/oci/{infrastructure_id}/regions/{region}', pathParamMap, ociAccountRegionSettings).then((response) => {
      return map(response, OciAccountRegionSettings);
    });
  }

  /**
   * @summary Delete OCI account region settings
   * @param {string} infrastructureId Id of the OCI account
   * @param {OciCloudRegion} region OCI region
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public delete(infrastructureId: string, region: OciCloudRegion): Promise<OciAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.delete<OciAccountRegionSettings>('/encoding/infrastructure/oci/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return map(response, OciAccountRegionSettings);
    });
  }

  /**
   * @summary OCI account region settings details
   * @param {string} infrastructureId Id of the OCI account
   * @param {OciCloudRegion} region OCI region
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public get(infrastructureId: string, region: OciCloudRegion): Promise<OciAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.get<OciAccountRegionSettings>('/encoding/infrastructure/oci/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return map(response, OciAccountRegionSettings);
    });
  }

  /**
   * @summary List OCI account region settings
   * @param {string} infrastructureId Id of the OCI account
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RegionsApi
   */
  public list(infrastructureId: string, queryParameters?: OciAccountRegionSettingsListQueryParams | ((q: OciAccountRegionSettingsListQueryParamsBuilder) => OciAccountRegionSettingsListQueryParamsBuilder)): Promise<PaginationResponse<OciAccountRegionSettings>> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    let queryParams: OciAccountRegionSettingsListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new OciAccountRegionSettingsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<OciAccountRegionSettings>>('/encoding/infrastructure/oci/{infrastructure_id}/regions', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<OciAccountRegionSettings>(response, OciAccountRegionSettings);
    });
  }
}
