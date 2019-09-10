import {map, mapArray} from '../common/Mapper';
import DashCmafRepresentation from './DashCmafRepresentation';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';

/**
 * @export
 * @class DashCmafDrmRepresentation
 */
export class DashCmafDrmRepresentation extends DashCmafRepresentation {
  /**
   * DRM Id (required)
   * @type {string}
   * @memberof DashCmafDrmRepresentation
   */
  public drmId?: string;

  constructor(obj?: Partial<DashCmafDrmRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.drmId = map(obj.drmId);
  }
}

export default DashCmafDrmRepresentation;

