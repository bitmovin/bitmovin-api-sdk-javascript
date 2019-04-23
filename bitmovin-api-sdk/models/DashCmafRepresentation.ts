import {map} from '../common/Mapper';
import DashMuxingType from './DashMuxingType';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashCmafRepresentation
 */
export default class DashCmafRepresentation extends DashSegmentedRepresentation {
  constructor(obj: any) {
    super(obj);
  }

}
