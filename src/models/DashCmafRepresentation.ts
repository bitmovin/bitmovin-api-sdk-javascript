import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashCmafRepresentation
 */
export class DashCmafRepresentation extends DashSegmentedRepresentation {
  constructor(obj?: Partial<DashCmafRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DashCmafRepresentation;

