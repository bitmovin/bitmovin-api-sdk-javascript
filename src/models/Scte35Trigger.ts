import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class Scte35Trigger
 */
export class Scte35Trigger extends BitmovinResponse {
  /**
   * Time in seconds where the SCTE 35 trigger should be inserted (required)
   * @type {number}
   * @memberof Scte35Trigger
   */
  public time?: number;

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
    this.time = map(obj.time);
    this.base64EncodedMetadata = map(obj.base64EncodedMetadata);
  }
}

export default Scte35Trigger;

