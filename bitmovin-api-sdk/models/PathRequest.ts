import {map} from '../common/Mapper';
import CloudRegion from './CloudRegion';

/**
 * @export
 * @class PathRequest
 */
export default class PathRequest {
  constructor(obj: any) {
    this.path = map(obj.path);
    this.recursive = map(obj.recursive);
    this.cloudRegion = map(obj.cloudRegion);
  }

  /**
   * @type {string}
   * @memberof PathRequest
   */
  public path?: string;
  /**
   * @type {boolean}
   * @memberof PathRequest
   */
  public recursive?: boolean;
  /**
   * @type {CloudRegion}
   * @memberof PathRequest
   */
  public cloudRegion?: CloudRegion;
}
