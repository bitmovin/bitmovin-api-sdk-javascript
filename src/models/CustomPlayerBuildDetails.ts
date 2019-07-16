import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class CustomPlayerBuildDetails
 */
export class CustomPlayerBuildDetails extends BitmovinResource {
  /**
   * The player version that should be used for the custom player build. If not set the 'latest' version is used. (required)
   * @type {string}
   * @memberof CustomPlayerBuildDetails
   */
  public playerVersion: string;

  /**
   * The domains that the player is locked to. If not set the player will only work with 'localhost'. Not more than 49 additional domains can be added. (required)
   * @type {string[]}
   * @memberof CustomPlayerBuildDetails
   */
  public domains: string[];

  constructor(obj: Partial<CustomPlayerBuildDetails>) {
    super(obj);
    this.playerVersion = map(obj.playerVersion);
    this.domains = map(obj.domains);
  }
}

export default CustomPlayerBuildDetails;

