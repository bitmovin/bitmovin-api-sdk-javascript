import {map} from '../common/Mapper';
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

  constructor(obj: Partial<DashRepresentation>) {
    super(obj);

    this.encodingId = obj.encodingId;
    this.muxingId = obj.muxingId;
  }
}

export default DashRepresentation;

