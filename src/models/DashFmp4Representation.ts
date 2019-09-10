import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashFmp4Representation
 */
export class DashFmp4Representation extends DashSegmentedRepresentation {
  constructor(obj?: Partial<DashFmp4Representation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DashFmp4Representation;

