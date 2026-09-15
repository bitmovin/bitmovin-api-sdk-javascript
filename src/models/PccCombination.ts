import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccCombination
 */
export class PccCombination {
  /**
   * The codec, as the shared contract spells it. (required)
   * @type {string}
   * @memberof PccCombination
   */
  public codec?: string;

  /**
   * The content protection, as the shared contract spells it. (required)
   * @type {string}
   * @memberof PccCombination
   */
  public protection?: string;

  /**
   * The column heading, spelled the way a reader reads it rather than the way the catalogue spells it. (required)
   * @type {string}
   * @memberof PccCombination
   */
  public label?: string;

  /**
   * Whether this column's stream is HDR. Read it here rather than out of the codec name: not every HDR codec spells `hdr10`, and the Dolby Vision ones never do. (required)
   * @type {boolean}
   * @memberof PccCombination
   */
  public hdr?: boolean;

  constructor(obj?: Partial<PccCombination>) {
    if(!obj) {
      return;
    }
    this.codec = map(obj.codec);
    this.protection = map(obj.protection);
    this.label = map(obj.label);
    this.hdr = map(obj.hdr);
  }
}

export default PccCombination;

