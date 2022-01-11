import {map, mapArray} from '../common/Mapper';
import DashMuxingRepresentation from './DashMuxingRepresentation';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';

/**
 * @export
 * @class ContentProtection
 */
export class ContentProtection extends DashMuxingRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof ContentProtection
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.CONTENT_PROTECTION;

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

