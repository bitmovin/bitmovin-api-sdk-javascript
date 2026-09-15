import {map, mapArray} from '../common/Mapper';
import PccHdrConfidence from './PccHdrConfidence';

/**
 * @export
 * @class PccHdrLegendEntry
 */
export class PccHdrLegendEntry {
  /**
   * The mark an HDR result wears on the cell. (required)
   * @type {string}
   * @memberof PccHdrLegendEntry
   */
  public mark?: string;

  /**
   * The reader's word for it — `The frames really were HDR`, `The device claims HDR`, and so on. (required)
   * @type {string}
   * @memberof PccHdrLegendEntry
   */
  public label?: string;

  /**
   * Which instrument established the picture, where anything did. (required)
   * @type {PccHdrConfidence}
   * @memberof PccHdrLegendEntry
   */
  public confidence?: PccHdrConfidence;

  /**
   * What that mark establishes, and what it does not. (required)
   * @type {string}
   * @memberof PccHdrLegendEntry
   */
  public sentence?: string;

  /**
   * Whether a result wearing this mark is one somebody should chase, which is not the same as how confident it is. (required)
   * @type {boolean}
   * @memberof PccHdrLegendEntry
   */
  public actionable?: boolean;

  constructor(obj?: Partial<PccHdrLegendEntry>) {
    if(!obj) {
      return;
    }
    this.mark = map(obj.mark);
    this.label = map(obj.label);
    this.confidence = map(obj.confidence);
    this.sentence = map(obj.sentence);
    this.actionable = map(obj.actionable);
  }
}

export default PccHdrLegendEntry;

