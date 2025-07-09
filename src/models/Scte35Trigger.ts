import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class Scte35Trigger
 */
export class Scte35Trigger extends BitmovinResponse {
  /**
   * The base 64 encoded data for the SCTE trigger (required)
   * @type {string}
   * @memberof Scte35Trigger
   */
  public base64EncodedMetadata?: string;

  constructor(obj?: Partial<Scte35Trigger>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.base64EncodedMetadata = map(obj.base64EncodedMetadata);
  }
}

export default Scte35Trigger;

