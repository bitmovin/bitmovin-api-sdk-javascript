import {map, mapArray} from '../common/Mapper';

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

  constructor(obj?: Partial<RescheduleEncodingRequest>) {
    if(!obj) {
      return;
    }
    this.infrastructureId = map(obj.infrastructureId);
  }
}

export default RescheduleEncodingRequest;

