import {map} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class DashSidecarRepresentation
 */
export default class DashSidecarRepresentation extends DashRepresentation {
  constructor(obj: any) {
    super(obj);
    this.sidecarId = map(obj.sidecarId);
  }

  /**
   * Sidecar Id
   * @type {string}
   * @memberof DashSidecarRepresentation
   */
  public sidecarId: string;
}
