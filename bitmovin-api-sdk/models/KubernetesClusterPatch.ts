import {map} from '../common/Mapper';

/**
 * @export
 * @class KubernetesClusterPatch
 */
export default class KubernetesClusterPatch {
  constructor(obj: any) {
    this.connected = map(obj.connected);
  }

  /**
   * Shows if the Kubernetes cluster is accessible by the Bitmovin Agent
   * @type {boolean}
   * @memberof KubernetesClusterPatch
   */
  public connected: boolean;
}
