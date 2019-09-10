import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';

/**
 * StatusApi - object-oriented interface
 * @export
 * @class StatusApi
 * @extends {BaseAPI}
 */
export default class StatusApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Kubernetes Cluster Status
   * @param {string} infrastructureId Id of the Kubernetes cluster
   * @throws {BitmovinError}
   * @memberof StatusApi
   */
  public get(infrastructureId: string): Promise<Response> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<Response>('/encoding/infrastructure/kubernetes/{infrastructure_id}/status', pathParamMap).then((response) => {
      return map(response, );
    });
  }
}
