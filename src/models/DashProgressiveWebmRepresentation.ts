import {map, mapArray} from '../common/Mapper';
import DashMuxingRepresentation from './DashMuxingRepresentation';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';

/**
 * @export
 * @class DashProgressiveWebmRepresentation
 */
export class DashProgressiveWebmRepresentation extends DashMuxingRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashProgressiveWebmRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.PROGRESSIVE_WEBM;

  /**
   * Path to the Progressive WebM file (required)
   * @type {string}
   * @memberof DashProgressiveWebmRepresentation
   */
  public filePath?: string;

  constructor(obj?: Partial<DashProgressiveWebmRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filePath = map(obj.filePath);
  }
}

export default DashProgressiveWebmRepresentation;

