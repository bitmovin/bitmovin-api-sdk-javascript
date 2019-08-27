import {map} from '../common/Mapper';
import DashFmp4Representation from './DashFmp4Representation';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';

/**
 * @export
 * @class DashFmp4DrmRepresentation
 */
export class DashFmp4DrmRepresentation extends DashFmp4Representation {
  /**
   * DRM Id (required)
   * @type {string}
   * @memberof DashFmp4DrmRepresentation
   */
  public drmId?: string;

  constructor(obj: Partial<DashFmp4DrmRepresentation>) {
    super(obj);

    this.drmId = obj.drmId;
  }
}

export default DashFmp4DrmRepresentation;

