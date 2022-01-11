import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashCmafRepresentation
 */
export class DashCmafRepresentation extends DashSegmentedRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashCmafRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.CMAF;

  constructor(obj?: Partial<DashCmafRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DashCmafRepresentation;

