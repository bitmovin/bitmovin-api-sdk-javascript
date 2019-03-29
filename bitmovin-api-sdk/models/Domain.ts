import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Domain
 */
export default class Domain extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.url = map(obj.url);
  }

  /**
   * Host where the player is allowed to play
   * @type {string}
   * @memberof Domain
   */
  public url: string;
}
