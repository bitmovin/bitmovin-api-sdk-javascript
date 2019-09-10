import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PrewarmEncoderSettings from '../../../../models/PrewarmEncoderSettings';
import PaginationResponse from '../../../../models/PaginationResponse';
import {PrewarmEncoderSettingsListQueryParams, PrewarmEncoderSettingsListQueryParamsBuilder} from './PrewarmEncoderSettingsListQueryParams';

/**
 * PrewarmedDeploymentApi - object-oriented interface
 * @export
 * @class PrewarmedDeploymentApi
 * @extends {BaseAPI}
 */
export default class PrewarmedDeploymentApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Prewarm Encoders
   * @param {string} infrastructureId Id of the kubernetes cluster.
   * @param {PrewarmEncoderSettings} prewarmEncoderSettings Settings for prewarming Encoders
   * @throws {BitmovinError}
   * @memberof PrewarmedDeploymentApi
   */
  public create(infrastructureId: string, prewarmEncoderSettings?: PrewarmEncoderSettings): Promise<PrewarmEncoderSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.post<PrewarmEncoderSettings>('/encoding/infrastructure/kubernetes/{infrastructure_id}/prewarmed-deployment', pathParamMap, prewarmEncoderSettings).then((response) => {
      return map(response, PrewarmEncoderSettings);
    });
  }

  /**
   * @summary Delete Prewarmed Encoders
   * @param {string} infrastructureId Id of the kubernetes cluster.
   * @param {string} deploymentId Id of the prewarmed deployment.
   * @throws {BitmovinError}
   * @memberof PrewarmedDeploymentApi
   */
  public delete(infrastructureId: string, deploymentId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      deployment_id: deploymentId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/infrastructure/kubernetes/{infrastructure_id}/prewarmed-deployment/{deployment_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Prewarmed Encoders
   * @param {string} infrastructureId Id of the kubernetes cluster.
   * @param {string} deploymentId Id of the prewarmed deployment.
   * @throws {BitmovinError}
   * @memberof PrewarmedDeploymentApi
   */
  public get(infrastructureId: string, deploymentId: string): Promise<PrewarmEncoderSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      deployment_id: deploymentId
    };
    return this.restClient.get<PrewarmEncoderSettings>('/encoding/infrastructure/kubernetes/{infrastructure_id}/prewarmed-deployment/{deployment_id}', pathParamMap).then((response) => {
      return map(response, PrewarmEncoderSettings);
    });
  }

  /**
   * @summary List Prewarmed Encoders
   * @param {string} infrastructureId Id of the kubernetes cluster.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof PrewarmedDeploymentApi
   */
  public list(infrastructureId: string, queryParameters?: PrewarmEncoderSettingsListQueryParams | ((q: PrewarmEncoderSettingsListQueryParamsBuilder) => PrewarmEncoderSettingsListQueryParamsBuilder)): Promise<PaginationResponse<PrewarmEncoderSettings>> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    let queryParams: PrewarmEncoderSettingsListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PrewarmEncoderSettingsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PrewarmEncoderSettings>>('/encoding/infrastructure/kubernetes/{infrastructure_id}/prewarmed-deployment', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<PrewarmEncoderSettings>(response, PrewarmEncoderSettings);
    });
  }
}
