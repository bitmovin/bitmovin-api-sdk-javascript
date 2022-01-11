import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashChunkedTextRepresentation
 */
export class DashChunkedTextRepresentation extends DashSegmentedRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashChunkedTextRepresentation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.CHUNKED_TEXT;

  constructor(obj?: Partial<DashChunkedTextRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DashChunkedTextRepresentation;

