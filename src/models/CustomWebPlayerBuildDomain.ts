import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class CustomWebPlayerBuildDomain
 */
export class CustomWebPlayerBuildDomain extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.domain = map(obj.domain);
  }

  /**
   * Domain where the player is allowed to play (required)
   * @type {string}
   * @memberof CustomWebPlayerBuildDomain
   */
  public domain: string;
}

export default CustomWebPlayerBuildDomain;

