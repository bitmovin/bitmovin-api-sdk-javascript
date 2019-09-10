import {map, mapArray} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class ContentProtection
 */
export class ContentProtection extends DashRepresentation {
  /**
   * DRM Id (required)
   * @type {string}
   * @memberof ContentProtection
   */
  public drmId?: string;

  constructor(obj?: Partial<ContentProtection>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.drmId = map(obj.drmId);
  }
}

export default ContentProtection;

