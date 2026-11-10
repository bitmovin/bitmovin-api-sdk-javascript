import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import MoqDraftVersion from './MoqDraftVersion';
import Output from './Output';
import OutputType from './OutputType';

/**
 * Media over QUIC (MoQ) output. Publishes the live encoding to a MoQ relay over MoQ Transport (MoQT).  **BETA:** MoQ output is a beta feature. MoQ Transport is still an evolving IETF draft and relay implementations differ, so it might not work with some MoQ relays. It has been tested with `DRAFT_16` and the Cloudflare MoQ relay. 
 * @export
 * @class MoqOutput
 */
export class MoqOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof MoqOutput
   */
  public readonly type: OutputType = OutputType.MOQ;

  /**
   * URL of the MoQ relay the encoder publishes to. (required)
   * @type {string}
   * @memberof MoqOutput
   */
  public relayUrl?: string;

  /**
   * MoQT Track Namespace under which the tracks are published. A tuple of one to 32 fields, not a URI or path. (required)
   * @type {string[]}
   * @memberof MoqOutput
   */
  public trackNamespace?: string[];

  /**
   * MoQ Transport draft version to use for the session with the relay. (required)
   * @type {MoqDraftVersion}
   * @memberof MoqOutput
   */
  public draftVersion?: MoqDraftVersion;

  /**
   * Token sent to the MoQ relay as the MoQT AUTHORIZATION TOKEN parameter. This is the only supported authentication mechanism; credentials in the relay URL are not used.
   * @type {string}
   * @memberof MoqOutput
   */
  public authToken?: string;

  /**
   * Token type of the MoQT AUTHORIZATION TOKEN parameter (IANA MoQ Auth Token Type registry or private-use range). Only used together with authToken. If not set, the encoder applies its default token type.
   * @type {number}
   * @memberof MoqOutput
   */
  public authTokenType?: number;

  constructor(obj?: Partial<MoqOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.relayUrl = map(obj.relayUrl);
    this.trackNamespace = mapArray(obj.trackNamespace);
    this.draftVersion = map(obj.draftVersion);
    this.authToken = map(obj.authToken);
    this.authTokenType = map(obj.authTokenType);
  }
}

export default MoqOutput;

