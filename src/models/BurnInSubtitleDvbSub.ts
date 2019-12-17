import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class BurnInSubtitleDvbSub
 */
export class BurnInSubtitleDvbSub extends BitmovinResource {
  /**
   * Id of an IngestInputStream which specifies the stream of the DVB-SUB subtitles (required)
   * @type {string}
   * @memberof BurnInSubtitleDvbSub
   */
  public inputStreamId?: string;

  constructor(obj?: Partial<BurnInSubtitleDvbSub>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputStreamId = map(obj.inputStreamId);
  }
}

export default BurnInSubtitleDvbSub;

