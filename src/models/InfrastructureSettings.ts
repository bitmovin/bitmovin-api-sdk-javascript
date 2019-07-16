import {map} from '../common/Mapper';
import CloudRegion from './CloudRegion';

/**
 * @export
 * @class InfrastructureSettings
 */
export class InfrastructureSettings {
  /**
   * Id of a custom infrastructure, e.g., Kubernetes Cluster
   * @type {string}
   * @memberof InfrastructureSettings
   */
  public infrastructureId?: string;

  /**
   * @type {CloudRegion}
   * @memberof InfrastructureSettings
   */
  public cloudRegion?: CloudRegion;

  constructor(obj: Partial<InfrastructureSettings>) {
    this.infrastructureId = map(obj.infrastructureId);
    this.cloudRegion = map(obj.cloudRegion);
  }
}

export default InfrastructureSettings;

