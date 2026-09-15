import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccCombinationEvidence
 */
export class PccCombinationEvidence {
  /**
   * The codec, as the shared contract spells it. (required)
   * @type {string}
   * @memberof PccCombinationEvidence
   */
  public codec?: string;

  /**
   * The content protection, as the shared contract spells it. (required)
   * @type {string}
   * @memberof PccCombinationEvidence
   */
  public protection?: string;

  /**
   * Device pools that played it, which is what proves the stream behind it works at all. (required)
   * @type {number}
   * @memberof PccCombinationEvidence
   */
  public playedBy?: number;

  /**
   * Device pools that reported support for it and then failed to play it. (required)
   * @type {number}
   * @memberof PccCombinationEvidence
   */
  public claimedNotPlayedBy?: number;

  /**
   * Device pools that produced an answer either way. (required)
   * @type {number}
   * @memberof PccCombinationEvidence
   */
  public measuredBy?: number;

  /**
   * No conformant stream can exist for this pairing, so it is neither gap nor result. (required)
   * @type {boolean}
   * @memberof PccCombinationEvidence
   */
  public notApplicable?: boolean;

  /**
   * Hosts that served its stream. A host only — never a path and never a URL. (required)
   * @type {string[]}
   * @memberof PccCombinationEvidence
   */
  public assetHosts?: string[];

  /**
   * Hosts that licensed it. A separate axis from the one above: without both, a device refusing a codec cannot be told from a stream that stopped being served. (required)
   * @type {string[]}
   * @memberof PccCombinationEvidence
   */
  public licenseServers?: string[];

  constructor(obj?: Partial<PccCombinationEvidence>) {
    if(!obj) {
      return;
    }
    this.codec = map(obj.codec);
    this.protection = map(obj.protection);
    this.playedBy = map(obj.playedBy);
    this.claimedNotPlayedBy = map(obj.claimedNotPlayedBy);
    this.measuredBy = map(obj.measuredBy);
    this.notApplicable = map(obj.notApplicable);
    this.assetHosts = mapArray(obj.assetHosts);
    this.licenseServers = mapArray(obj.licenseServers);
  }
}

export default PccCombinationEvidence;

