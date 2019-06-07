import {map} from '../common/Mapper';
import MediaStream from './MediaStream';

/**
 * @export
 * @class SubtitleStream
 */
export class SubtitleStream extends MediaStream {
  constructor(obj: any) {
    super(obj);
    this.language = map(obj.language);
    this.hearingImpaired = map(obj.hearingImpaired);
  }

  /**
   * Language of the stream
   * @type {string}
   * @memberof SubtitleStream
   */
  public language?: string;
  /**
   * Hearing impaired support
   * @type {boolean}
   * @memberof SubtitleStream
   */
  public hearingImpaired?: boolean;
}

export default SubtitleStream;

