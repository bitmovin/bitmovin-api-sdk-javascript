import {map, mapArray} from '../common/Mapper';
import BitmovinStreamEncodingStatus from './BitmovinStreamEncodingStatus';
import BitmovinStreamQuality from './BitmovinStreamQuality';

/**
 * @export
 * @class BitmovinStreamEncodingTask
 */
export class BitmovinStreamEncodingTask {
  /**
   * Quality of the encoding
   * @type {BitmovinStreamQuality}
   * @memberof BitmovinStreamEncodingTask
   */
  public quality?: BitmovinStreamQuality;

  /**
   * Current state of the encoding
   * @type {BitmovinStreamEncodingStatus}
   * @memberof BitmovinStreamEncodingTask
   */
  public status?: BitmovinStreamEncodingStatus;

  constructor(obj?: Partial<BitmovinStreamEncodingTask>) {
    if(!obj) {
      return;
    }
    this.quality = map(obj.quality);
    this.status = map(obj.status);
  }
}

export default BitmovinStreamEncodingTask;

