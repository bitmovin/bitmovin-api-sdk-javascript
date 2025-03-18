import {map, mapArray} from '../common/Mapper';
import PoisEndpointCredentials from './PoisEndpointCredentials';

/**
 * @export
 * @class EsamSettings
 */
export class EsamSettings {
  /**
   * The URL of the Placement Opportunity Information System (POIS) signal processing endpoint.  The encoder transmits SignalProcessingEvents to this endpoint whenever SCTE-35 messages are detected. 
   * @type {string}
   * @memberof EsamSettings
   */
  public poisEndpoint?: string;

  /**
   * A unique identifier representing the `Acquisition Point Identity` defined in the ESAM specification. 
   * @type {string}
   * @memberof EsamSettings
   */
  public acquisitionPointIdentity?: string;

  /**
   * Specifies the `Zone Identity` defined in the ESAM specification. 
   * @type {string}
   * @memberof EsamSettings
   */
  public zoneIdentity?: string;

  /**
   * Defines an offset (in milliseconds) to be applied to the stream event timestamp.  This offset adjusts the `StreamTime` values (such as PTS) associated with ad opportunities  or content insertions. It is used to fine-tune timing for embedded SCTE-104/35 messages  to ensure precise frame alignment in the transport stream. 
   * @type {number}
   * @memberof EsamSettings
   */
  public adAvailOffset?: number;

  /**
   * If authentication is required to access the POIS endpoint, credentials must be provided. 
   * @type {PoisEndpointCredentials}
   * @memberof EsamSettings
   */
  public poisEndpointCredentials?: PoisEndpointCredentials;

  constructor(obj?: Partial<EsamSettings>) {
    if(!obj) {
      return;
    }
    this.poisEndpoint = map(obj.poisEndpoint);
    this.acquisitionPointIdentity = map(obj.acquisitionPointIdentity);
    this.zoneIdentity = map(obj.zoneIdentity);
    this.adAvailOffset = map(obj.adAvailOffset);
    this.poisEndpointCredentials = map(obj.poisEndpointCredentials, PoisEndpointCredentials);
  }
}

export default EsamSettings;

