import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccVerdictLegendEntry
 */
export class PccVerdictLegendEntry {
  /**
   * The mark the grid draws for every verdict reading as this entry's label. (required)
   * @type {string}
   * @memberof PccVerdictLegendEntry
   */
  public symbol?: string;

  /**
   * The reader's word for those verdicts — `Supported`, `Not measured`, and so on. (required)
   * @type {string}
   * @memberof PccVerdictLegendEntry
   */
  public label?: string;

  /**
   * What that word means here. (required)
   * @type {string}
   * @memberof PccVerdictLegendEntry
   */
  public sentence?: string;

  /**
   * False where these verdicts say something about the measurement rather than about the device. Folding those into \"not supported\" is how this dataset gets misread. (required)
   * @type {boolean}
   * @memberof PccVerdictLegendEntry
   */
  public aboutTheDevice?: boolean;

  constructor(obj?: Partial<PccVerdictLegendEntry>) {
    if(!obj) {
      return;
    }
    this.symbol = map(obj.symbol);
    this.label = map(obj.label);
    this.sentence = map(obj.sentence);
    this.aboutTheDevice = map(obj.aboutTheDevice);
  }
}

export default PccVerdictLegendEntry;

