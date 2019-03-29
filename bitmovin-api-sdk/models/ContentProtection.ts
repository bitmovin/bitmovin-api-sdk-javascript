import {map} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class ContentProtection
 */
export default class ContentProtection extends DashRepresentation {
  constructor(obj: any) {
    super(obj);
    this.drmId = map(obj.drmId);
  }

  /**
   * DRM Id
   * @type {string}
   * @memberof ContentProtection
   */
  public drmId: string;
}
