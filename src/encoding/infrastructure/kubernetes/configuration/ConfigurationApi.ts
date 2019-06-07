import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import KubernetesClusterConfiguration from '../../../../models/KubernetesClusterConfiguration';

/**
 * ConfigurationApi - object-oriented interface
 * @export
 * @class ConfigurationApi
 * @extends {BaseAPI}
 */
export default class ConfigurationApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Retrieve Kubernetes Cluster Configuration
   * @param {string} infrastructureId Id of the Kubernetes cluster
   * @throws {RequiredError}
   * @memberof ConfigurationApi
   */
  public get(infrastructureId: string): Promise<KubernetesClusterConfiguration> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<KubernetesClusterConfiguration>('/encoding/infrastructure/kubernetes/{infrastructure_id}/configuration', pathParamMap).then((response) => {
      return new KubernetesClusterConfiguration(response);
    });
  }

  /**
   * @summary Update Kubernetes Cluster Configuration
   * @param {string} infrastructureId Id of the Kubernetes cluster
   * @param {KubernetesClusterConfiguration} kubernetesClusterConfiguration
   * @throws {RequiredError}
   * @memberof ConfigurationApi
   */
  public update(infrastructureId: string, kubernetesClusterConfiguration?: KubernetesClusterConfiguration): Promise<KubernetesClusterConfiguration> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.put<KubernetesClusterConfiguration>('/encoding/infrastructure/kubernetes/{infrastructure_id}/configuration', pathParamMap, kubernetesClusterConfiguration).then((response) => {
      return new KubernetesClusterConfiguration(response);
    });
  }
}
