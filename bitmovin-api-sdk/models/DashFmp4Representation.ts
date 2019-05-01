import {map} from '../common/Mapper';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashFmp4Representation
 */
export default class DashFmp4Representation extends DashSegmentedRepresentation {
  constructor(obj: any) {
    super(obj);
  }

}
