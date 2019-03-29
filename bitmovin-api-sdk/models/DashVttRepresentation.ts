import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class DashVttRepresentation
 */
export default class DashVttRepresentation extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.vttUrl = map(obj.vttUrl);
  }

  /**
   * URL of the referenced VTT file
   * @type {string}
   * @memberof DashVttRepresentation
   */
  public vttUrl: string;
}
