import {map, mapArray} from '../common/Mapper';
import PccCodecReach from './PccCodecReach';
import PccCombinationEvidence from './PccCombinationEvidence';
import PccDeviceTypeShare from './PccDeviceTypeShare';
import PccHdrSummary from './PccHdrSummary';
import PccOverview from './PccOverview';
import PccSupportShare from './PccSupportShare';
import PccVerdictShare from './PccVerdictShare';

/**
 * @export
 * @class PccSummary
 */
export class PccSummary {
  /**
   * @type {PccOverview}
   * @memberof PccSummary
   */
  public overview?: PccOverview;

  /**
   * @type {PccCodecReach[]}
   * @memberof PccSummary
   */
  public codecReach?: PccCodecReach[];

  /**
   * Selected applicable codec/protection combinations with no device-answering verdict. Declared unsupported and claimed-but-not-played are answers; inapplicable pairings are not gaps. (required)
   * @type {number}
   * @memberof PccSummary
   */
  public unansweredCombinations?: number;

  /**
   * @type {PccVerdictShare[]}
   * @memberof PccSummary
   */
  public verdicts?: PccVerdictShare[];

  /**
   * @type {PccSupportShare[]}
   * @memberof PccSummary
   */
  public byCodec?: PccSupportShare[];

  /**
   * @type {PccSupportShare[]}
   * @memberof PccSummary
   */
  public byProtection?: PccSupportShare[];

  /**
   * @type {PccDeviceTypeShare[]}
   * @memberof PccSummary
   */
  public byDeviceType?: PccDeviceTypeShare[];

  /**
   * Every selected combination, with what the selected device pools answered about it. One that several pools claimed and none played points at the stream rather than at the devices. (required)
   * @type {PccCombinationEvidence[]}
   * @memberof PccSummary
   */
  public combinations?: PccCombinationEvidence[];

  /**
   * @type {PccHdrSummary}
   * @memberof PccSummary
   */
  public hdr?: PccHdrSummary;

  constructor(obj?: Partial<PccSummary>) {
    if(!obj) {
      return;
    }
    this.overview = map(obj.overview, PccOverview);
    this.codecReach = mapArray(obj.codecReach, PccCodecReach);
    this.unansweredCombinations = map(obj.unansweredCombinations);
    this.verdicts = mapArray(obj.verdicts, PccVerdictShare);
    this.byCodec = mapArray(obj.byCodec, PccSupportShare);
    this.byProtection = mapArray(obj.byProtection, PccSupportShare);
    this.byDeviceType = mapArray(obj.byDeviceType, PccDeviceTypeShare);
    this.combinations = mapArray(obj.combinations, PccCombinationEvidence);
    this.hdr = map(obj.hdr, PccHdrSummary);
  }
}

export default PccSummary;

