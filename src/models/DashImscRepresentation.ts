import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class DashImscRepresentation
 */
export class DashImscRepresentation extends BitmovinResource {
  /**
   * URL of the referenced IMSC file (required)
   * @type {string}
   * @memberof DashImscRepresentation
   */
  public imscUrl?: string;

  constructor(obj?: Partial<DashImscRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.imscUrl = map(obj.imscUrl);
  }
}

export default DashImscRepresentation;

