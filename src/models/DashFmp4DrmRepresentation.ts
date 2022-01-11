import {map, mapArray} from '../common/Mapper';
import DashFmp4Representation from './DashFmp4Representation';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';

/**
 * @export
 * @class DashFmp4DrmRepresentation
 */
export class DashFmp4DrmRepresentation extends DashFmp4Representation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashFmp4DrmRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.DRM_FMP4;

  /**
   * DRM Id (required)
   * @type {string}
   * @memberof DashFmp4DrmRepresentation
   */
  public drmId?: string;

  constructor(obj?: Partial<DashFmp4DrmRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.drmId = map(obj.drmId);
  }
}

export default DashFmp4DrmRepresentation;

