import {map} from '../common/Mapper';
import DashFmp4Representation from './DashFmp4Representation';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';

/**
 * @export
 * @class DashFmp4DrmRepresentation
 */
export default class DashFmp4DrmRepresentation extends DashFmp4Representation {
  constructor(obj: any) {
    super(obj);
    this.drmId = map(obj.drmId);
  }

  /**
   * DRM Id
   * @type {string}
   * @memberof DashFmp4DrmRepresentation
   */
  public drmId: string;
}
