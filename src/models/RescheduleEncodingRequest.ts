import {map} from '../common/Mapper';

/**
 * @export
 * @class RescheduleEncodingRequest
 */
export class RescheduleEncodingRequest {
  /**
   * Id of a custom infrastructure, e.g., Kubernetes Cluster
   * @type {string}
   * @memberof RescheduleEncodingRequest
   */
  public infrastructureId?: string;

  constructor(obj: Partial<RescheduleEncodingRequest>) {

    this.infrastructureId = obj.infrastructureId;
  }
}

export default RescheduleEncodingRequest;

