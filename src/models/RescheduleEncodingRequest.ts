import {map} from '../common/Mapper';

/**
 * @export
 * @class RescheduleEncodingRequest
 */
export class RescheduleEncodingRequest {
  constructor(obj: any) {
    this.infrastructureId = map(obj.infrastructureId);
  }

  /**
   * Id of a custom infrastructure, e.g., Kubernetes Cluster
   * @type {string}
   * @memberof RescheduleEncodingRequest
   */
  public infrastructureId?: string;
}

export default RescheduleEncodingRequest;

