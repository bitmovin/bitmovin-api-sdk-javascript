import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class DashRepresentation
 */
export class DashRepresentation extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.encodingId = map(obj.encodingId);
    this.muxingId = map(obj.muxingId);
  }

  /**
   * UUID of an encoding (required)
   * @type {string}
   * @memberof DashRepresentation
   */
  public encodingId: string;
  /**
   * UUID of a muxing (required)
   * @type {string}
   * @memberof DashRepresentation
   */
  public muxingId: string;
}

export default DashRepresentation;

