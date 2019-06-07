import {map} from '../common/Mapper';

/**
 * @export
 * @class KubernetesClusterConfiguration
 */
export class KubernetesClusterConfiguration {
  constructor(obj: any) {
    this.parallelEncodings = map(obj.parallelEncodings);
    this.workersPerEncoding = map(obj.workersPerEncoding);
  }

  /**
   * Number of parallel scheduled encodings on the Kubernetes cluster
   * @type {number}
   * @memberof KubernetesClusterConfiguration
   */
  public parallelEncodings: number;
  /**
   * Number of worker nodes used for each encoding on the Kubernetes cluster
   * @type {number}
   * @memberof KubernetesClusterConfiguration
   */
  public workersPerEncoding: number;
}

export default KubernetesClusterConfiguration;

