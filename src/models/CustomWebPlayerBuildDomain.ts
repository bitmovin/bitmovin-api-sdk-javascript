import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class CustomWebPlayerBuildDomain
 */
export class CustomWebPlayerBuildDomain extends BitmovinResource {
  /**
   * Domain where the player is allowed to play (required)
   * @type {string}
   * @memberof CustomWebPlayerBuildDomain
   */
  public domain?: string;

  constructor(obj?: Partial<CustomWebPlayerBuildDomain>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.domain = map(obj.domain);
  }
}

export default CustomWebPlayerBuildDomain;

