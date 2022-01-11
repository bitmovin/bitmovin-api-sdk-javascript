import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashFmp4Representation
 */
export class DashFmp4Representation extends DashSegmentedRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashFmp4Representation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.FMP4;

  constructor(obj?: Partial<DashFmp4Representation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DashFmp4Representation;

