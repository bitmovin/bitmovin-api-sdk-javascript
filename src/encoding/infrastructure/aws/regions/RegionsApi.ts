import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AwsAccountRegionSettings from '../../../../models/AwsAccountRegionSettings';
import AwsCloudRegion from '../../../../models/AwsCloudRegion';
import PaginationResponse from '../../../../models/PaginationResponse';
import { AwsAccountRegionSettingsListQueryParams, AwsAccountRegionSettingsListQueryParamsBuilder } from './AwsAccountRegionSettingsListQueryParams';

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
   * @summary Add AWS Region Setting
   * @param {string} infrastructureId Id of the AWS account
   * @param {AwsCloudRegion} region AWS region.
   * @param {AwsAccountRegionSettings} awsAccountRegionSettings The AWS Region Settings to be added
   * @throws {RequiredError}
   * @memberof RegionsApi
   */
  public create(infrastructureId: string, region: AwsCloudRegion, awsAccountRegionSettings?: AwsAccountRegionSettings): Promise<AwsAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.post<AwsAccountRegionSettings>('/encoding/infrastructure/aws/{infrastructure_id}/regions/{region}', pathParamMap, awsAccountRegionSettings).then((response) => {
      return new AwsAccountRegionSettings(response);
    });
  }

  /**
   * @summary Delete AWS Region Settings
   * @param {string} infrastructureId Id of the AWS account
   * @param {AwsCloudRegion} region AWS region.
   * @throws {RequiredError}
   * @memberof RegionsApi
   */
  public delete(infrastructureId: string, region: AwsCloudRegion): Promise<AwsAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.delete<AwsAccountRegionSettings>('/encoding/infrastructure/aws/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return new AwsAccountRegionSettings(response);
    });
  }

  /**
   * @summary AWS Region Settings Details
   * @param {string} infrastructureId Id of the AWS account
   * @param {AwsCloudRegion} region AWS region.
   * @throws {RequiredError}
   * @memberof RegionsApi
   */
  public get(infrastructureId: string, region: AwsCloudRegion): Promise<AwsAccountRegionSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      region: region
    };
    return this.restClient.get<AwsAccountRegionSettings>('/encoding/infrastructure/aws/{infrastructure_id}/regions/{region}', pathParamMap).then((response) => {
      return new AwsAccountRegionSettings(response);
    });
  }

  /**
   * @summary List AWS Region Settings
   * @param {string} infrastructureId Id of the AWS account
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof RegionsApi
   */
  public list(infrastructureId: string, queryParameters?: AwsAccountRegionSettingsListQueryParams | ((q: AwsAccountRegionSettingsListQueryParamsBuilder) => AwsAccountRegionSettingsListQueryParamsBuilder)): Promise<PaginationResponse<AwsAccountRegionSettings>> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    let queryParams: AwsAccountRegionSettingsListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new AwsAccountRegionSettingsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AwsAccountRegionSettings>>('/encoding/infrastructure/aws/{infrastructure_id}/regions', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AwsAccountRegionSettings>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AwsAccountRegionSettings(i));
      }
      return paginationResponse;
    });
  }
}
