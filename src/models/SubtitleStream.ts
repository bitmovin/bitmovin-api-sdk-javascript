import {map} from '../common/Mapper';
import MediaStream from './MediaStream';

/**
 * @export
 * @class SubtitleStream
 */
export class SubtitleStream extends MediaStream {
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

  constructor(obj: Partial<SubtitleStream>) {
    super(obj);

    this.language = obj.language;
    this.hearingImpaired = obj.hearingImpaired;
  }
}

export default SubtitleStream;

