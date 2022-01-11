import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashWebmRepresentation
 */
export class DashWebmRepresentation extends DashSegmentedRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashWebmRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.WEBM;

  constructor(obj?: Partial<DashWebmRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DashWebmRepresentation;

