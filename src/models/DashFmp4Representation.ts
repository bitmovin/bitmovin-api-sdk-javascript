import {map} from '../common/Mapper';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashFmp4Representation
 */
export class DashFmp4Representation extends DashSegmentedRepresentation {
  constructor(obj: any) {
    super(obj);
  }

}

export default DashFmp4Representation;

