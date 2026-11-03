import {map, mapArray} from '../common/Mapper';

/**
 * Analysis metadata. Retains its original values in language-specific results.
 * @export
 * @class Metadata
 */
export class Metadata {
  /**
   * Version of the analysis software used to generate this result.
   * @type {string}
   * @memberof Metadata
   */
  public version?: string;

  /**
   * Attribution or disclaimer attached to the generated analysis.
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

