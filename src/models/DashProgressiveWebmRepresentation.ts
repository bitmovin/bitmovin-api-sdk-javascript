import {map, mapArray} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class DashProgressiveWebmRepresentation
 */
export class DashProgressiveWebmRepresentation extends DashRepresentation {
  /**
   * Path to the Progressive WebM file (required)
   * @type {string}
   * @memberof DashProgressiveWebmRepresentation
   */
  public filePath?: string;

  constructor(obj?: Partial<DashProgressiveWebmRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filePath = map(obj.filePath);
  }
}

export default DashProgressiveWebmRepresentation;

