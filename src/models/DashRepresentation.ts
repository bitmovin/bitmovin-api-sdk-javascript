import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class DashRepresentation
 */
export class DashRepresentation extends BitmovinResponse {
  /**
   * UUID of an encoding (required)
   * @type {string}
   * @memberof DashRepresentation
   */
  public encodingId?: string;

  /**
   * UUID of a muxing (required)
   * @type {string}
   * @memberof DashRepresentation
   */
  public muxingId?: string;

  /**
   * Used to signal a dependency with another representation. The representation may belong to a different adaptation set
   * @type {string}
   * @memberof DashRepresentation
   */
  public dependencyId?: string;

  constructor(obj?: Partial<DashRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
    this.muxingId = map(obj.muxingId);
    this.dependencyId = map(obj.dependencyId);
  }
}

export default DashRepresentation;

