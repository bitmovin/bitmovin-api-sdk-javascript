import {map} from '../common/Mapper';
import DashMuxingType from './DashMuxingType';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashWebmRepresentation
 */
export default class DashWebmRepresentation extends DashSegmentedRepresentation {
  constructor(obj: any) {
    super(obj);
  }

}
