import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Metadata
 */
export class Metadata {
  /**
   * @type {string}
   * @memberof Metadata
   */
  public version?: string;

  /**
   * @type {string}
   * @memberof Metadata
   */
  public disclaimer?: string;

  constructor(obj?: Partial<Metadata>) {
    if(!obj) {
      return;
    }
    this.version = map(obj.version);
    this.disclaimer = map(obj.disclaimer);
  }
}

export default Metadata;

