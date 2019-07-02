import {map} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class ContentProtection
 */
export class ContentProtection extends DashRepresentation {
  constructor(obj: any) {
    super(obj);
    this.drmId = map(obj.drmId);
  }

  /**
   * DRM Id (required)
   * @type {string}
   * @memberof ContentProtection
   */
  public drmId: string;
}

export default ContentProtection;

