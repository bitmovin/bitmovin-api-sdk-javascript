import {map, mapArray} from '../common/Mapper';
import PccPicture from './PccPicture';
import PccVerdict from './PccVerdict';

/**
 * @export
 * @class PccCell
 */
export class PccCell {
  /**
   * What a combination says once every session that measured it has been read. Five of the nine answer for the measurement rather than for the device; `aboutTheDevice` says which, and folding those into \"not supported\" is how this data gets misread. (required)
   * @type {PccVerdict}
   * @memberof PccCell
   */
  public verdict?: PccVerdict;

  /**
   * The reader's word for that verdict — `Supported`, `Not supported`, `Not measured`, and so on. Fewer words than there are verdicts: three of them read as `Not measured`. `legend` lists every word. (required)
   * @type {string}
   * @memberof PccCell
   */
  public label?: string;

  /**
   * False where the verdict says something about the measurement rather than the device. (required)
   * @type {boolean}
   * @memberof PccCell
   */
  public aboutTheDevice?: boolean;

  /**
   * The cell's whole account in one paragraph: the verdict, what agreed, the picture, the stream. (required)
   * @type {string}
   * @memberof PccCell
   */
  public account?: string;

  /**
   * The grid's own mark for that verdict, which `legend` explains. (required)
   * @type {string}
   * @memberof PccCell
   */
  public symbol?: string;

  /**
   * `3/4` where a session disagreed with the published verdict, and absent where none did.
   * @type {string}
   * @memberof PccCell
   */
  public agreement?: string;

  /**
   * What the sessions that disagreed recorded, spelled out. Present only where `agreement` is.
   * @type {string}
   * @memberof PccCell
   */
  public agreementAccount?: string;

  /**
   * @type {PccPicture}
   * @memberof PccCell
   */
  public picture?: PccPicture;

  /**
   * The sessions this verdict was taken from. Quote one to Bitmovin support and the measurement behind this cell can be looked up, for as long as the fleet still holds it. (required)
   * @type {string[]}
   * @memberof PccCell
   */
  public agreeingSessionIds?: string[];

  /**
   * How many sessions recorded anything at all for this combination. (required)
   * @type {number}
   * @memberof PccCell
   */
  public resultSessions?: number;

  /**
   * Evidence excluded by the start date or session limit, including pools with no included sessions.
   * @type {string}
   * @memberof PccCell
   */
  public recency?: string;

  constructor(obj?: Partial<PccCell>) {
    if(!obj) {
      return;
    }
    this.verdict = map(obj.verdict);
    this.label = map(obj.label);
    this.aboutTheDevice = map(obj.aboutTheDevice);
    this.account = map(obj.account);
    this.symbol = map(obj.symbol);
    this.agreement = map(obj.agreement);
    this.agreementAccount = map(obj.agreementAccount);
    this.picture = map(obj.picture, PccPicture);
    this.agreeingSessionIds = mapArray(obj.agreeingSessionIds);
    this.resultSessions = map(obj.resultSessions);
    this.recency = map(obj.recency);
  }
}

export default PccCell;

