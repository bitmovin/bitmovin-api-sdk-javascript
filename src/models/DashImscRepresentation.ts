import {map, mapArray} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';

/**
 * @export
 * @class DashImscRepresentation
 */
export class DashImscRepresentation extends DashRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashImscRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.IMSC;

  /**
   * URL of the referenced IMSC file (required)
   * @type {string}
   * @memberof DashImscRepresentation
   */
  public imscUrl?: string;

  constructor(obj?: Partial<DashImscRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.imscUrl = map(obj.imscUrl);
  }
}

export default DashImscRepresentation;

