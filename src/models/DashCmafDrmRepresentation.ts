import {map} from '../common/Mapper';
import DashCmafRepresentation from './DashCmafRepresentation';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';

/**
 * @export
 * @class DashCmafDrmRepresentation
 */
export class DashCmafDrmRepresentation extends DashCmafRepresentation {
  constructor(obj: any) {
    super(obj);
    this.drmId = map(obj.drmId);
  }

  /**
   * DRM Id (required)
   * @type {string}
   * @memberof DashCmafDrmRepresentation
   */
  public drmId: string;
}

export default DashCmafDrmRepresentation;

