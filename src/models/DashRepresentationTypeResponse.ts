import {map, mapArray} from '../common/Mapper';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';

/**
 * @export
 * @class DashRepresentationTypeResponse
 */
export class DashRepresentationTypeResponse {
  /**
   * The type of the DASH representation
   * @type {DashRepresentationTypeDiscriminator}
   * @memberof DashRepresentationTypeResponse
   */
  public type?: DashRepresentationTypeDiscriminator;

  constructor(obj?: Partial<DashRepresentationTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default DashRepresentationTypeResponse;

