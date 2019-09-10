import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';

/**
 * AgentDeploymentApi - object-oriented interface
 * @export
 * @class AgentDeploymentApi
 * @extends {BaseAPI}
 */
export default class AgentDeploymentApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Download bitmovin-agent deployment
   * @param {string} infrastructureId Id of the Kubernetes cluster
   * @throws {BitmovinError}
   * @memberof AgentDeploymentApi
   */
  public get(infrastructureId: string): Promise<Response> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<Response>('/encoding/infrastructure/kubernetes/{infrastructure_id}/agent-deployment', pathParamMap).then((response) => {
      return map(response, );
    });
  }
}
