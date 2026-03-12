import {map, mapArray} from '../common/Mapper';

/**
 * ESAM signal following the SCTE-250 standard
 * @export
 * @class EsamSignal
 */
export class EsamSignal {
  /**
   * The offset from the matched signal in ISO 8601 duration format, accurate to milliseconds
   * @type {string}
   * @memberof EsamSignal
   */
  public offset?: string;

  /**
   * Base64-encoded SCTE-35 binary data to be inserted into the stream (required)
   * @type {string}
   * @memberof EsamSignal
   */
  public binary?: string;

  constructor(obj?: Partial<EsamSignal>) {
    if(!obj) {
      return;
    }
    this.offset = map(obj.offset);
    this.binary = map(obj.binary);
  }
}

export default EsamSignal;

