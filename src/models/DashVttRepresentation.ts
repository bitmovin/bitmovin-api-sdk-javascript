import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class DashVttRepresentation
 */
export class DashVttRepresentation extends BitmovinResource {
  /**
   * URL of the referenced VTT file (required)
   * @type {string}
   * @memberof DashVttRepresentation
   */
  public vttUrl?: string;

  constructor(obj: Partial<DashVttRepresentation>) {
    super(obj);

    this.vttUrl = obj.vttUrl;
  }
}

export default DashVttRepresentation;

