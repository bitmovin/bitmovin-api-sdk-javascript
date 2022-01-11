import {map, mapArray} from '../common/Mapper';
import DashMp4Representation from './DashMp4Representation';
import DashOnDemandRepresentationType from './DashOnDemandRepresentationType';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';

/**
 * @export
 * @class DashMp4DrmRepresentation
 */
export class DashMp4DrmRepresentation extends DashMp4Representation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashMp4DrmRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.DRM_MP4;

  /**
   * DRM Id (required)
   * @type {string}
   * @memberof DashMp4DrmRepresentation
   */
  public drmId?: string;

  constructor(obj?: Partial<DashMp4DrmRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.drmId = map(obj.drmId);
  }
}

export default DashMp4DrmRepresentation;

