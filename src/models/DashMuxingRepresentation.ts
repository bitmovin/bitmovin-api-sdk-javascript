import {map, mapArray} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class DashMuxingRepresentation
 */
export class DashMuxingRepresentation extends DashRepresentation {
  /**
   * UUID of an encoding (required)
   * @type {string}
   * @memberof DashMuxingRepresentation
   */
  public encodingId?: string;

  /**
   * UUID of a muxing (required)
   * @type {string}
   * @memberof DashMuxingRepresentation
   */
  public muxingId?: string;

  /**
   * Used to signal a dependency with another representation. The representation may belong to a different adaptation set
   * @type {string}
   * @memberof DashMuxingRepresentation
   */
  public dependencyId?: string;

  constructor(obj?: Partial<DashMuxingRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
    this.muxingId = map(obj.muxingId);
    this.dependencyId = map(obj.dependencyId);
  }
}

export default DashMuxingRepresentation;

