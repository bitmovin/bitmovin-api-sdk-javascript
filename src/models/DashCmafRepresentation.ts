import {map} from '../common/Mapper';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashCmafRepresentation
 */
export class DashCmafRepresentation extends DashSegmentedRepresentation {
  constructor(obj: Partial<DashCmafRepresentation>) {
    super(obj);
  }
}

export default DashCmafRepresentation;

