import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashChunkedTextRepresentation
 */
export class DashChunkedTextRepresentation extends DashSegmentedRepresentation {
  constructor(obj?: Partial<DashChunkedTextRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DashChunkedTextRepresentation;

