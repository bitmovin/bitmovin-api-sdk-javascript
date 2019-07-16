import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class MediaStream
 */
export class MediaStream extends BitmovinResponse {
  /**
   * Position starts from 0 and indicates the position of the stream in the media. 0 means that this is the first stream found in the media
   * @type {number}
   * @memberof MediaStream
   */
  public position?: number;

  /**
   * Duration of the stream in seconds
   * @type {number}
   * @memberof MediaStream
   */
  public duration?: number;

  /**
   * Codec of the stream
   * @type {string}
   * @memberof MediaStream
   */
  public codec?: string;

  constructor(obj: Partial<MediaStream>) {
    super(obj);
    this.position = map(obj.position);
    this.duration = map(obj.duration);
    this.codec = map(obj.codec);
  }
}

export default MediaStream;

