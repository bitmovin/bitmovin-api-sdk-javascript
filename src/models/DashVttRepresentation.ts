import {map, mapArray} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';

/**
 * @export
 * @class DashVttRepresentation
 */
export class DashVttRepresentation extends DashRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashVttRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.VTT;

  /**
   * URL of the referenced VTT file (required)
   * @type {string}
   * @memberof DashVttRepresentation
   */
  public vttUrl?: string;

  constructor(obj?: Partial<DashVttRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.vttUrl = map(obj.vttUrl);
  }
}

export default DashVttRepresentation;

