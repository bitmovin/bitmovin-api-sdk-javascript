import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class KubernetesClusterConfiguration
 */
export class KubernetesClusterConfiguration {
  /**
   * Number of parallel scheduled encodings on the Kubernetes cluster (required)
   * @type {number}
   * @memberof KubernetesClusterConfiguration
   */
  public parallelEncodings?: number;

  /**
   * Number of worker nodes used for each encoding on the Kubernetes cluster (required)
   * @type {number}
   * @memberof KubernetesClusterConfiguration
   */
  public workersPerEncoding?: number;

  constructor(obj?: Partial<KubernetesClusterConfiguration>) {
    if(!obj) {
      return;
    }
    this.parallelEncodings = map(obj.parallelEncodings);
    this.workersPerEncoding = map(obj.workersPerEncoding);
  }
}

export default KubernetesClusterConfiguration;

