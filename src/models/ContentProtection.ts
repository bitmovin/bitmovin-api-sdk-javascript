import {map} from '../common/Mapper';
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

  constructor(obj: Partial<ContentProtection>) {
    super(obj);

    this.drmId = obj.drmId;
  }
}

export default ContentProtection;

