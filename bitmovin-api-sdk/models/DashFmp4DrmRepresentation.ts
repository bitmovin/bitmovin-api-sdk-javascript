import {map} from '../common/Mapper';
import DashFmp4Representation from './DashFmp4Representation';
import DashMuxingType from './DashMuxingType';

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
