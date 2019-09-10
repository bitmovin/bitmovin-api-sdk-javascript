import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Domain
 */
export class Domain extends BitmovinResource {
  /**
   * Host where the player is allowed to play (required)
   * @type {string}
   * @memberof Domain
   */
  public url?: string;

  constructor(obj?: Partial<Domain>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
  }
}

export default Domain;

