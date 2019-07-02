import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class DashVttRepresentation
 */
export class DashVttRepresentation extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.vttUrl = map(obj.vttUrl);
  }

  /**
   * URL of the referenced VTT file (required)
   * @type {string}
   * @memberof DashVttRepresentation
   */
  public vttUrl: string;
}

export default DashVttRepresentation;

