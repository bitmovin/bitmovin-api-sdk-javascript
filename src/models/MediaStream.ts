import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class MediaStream
 */
export class MediaStream extends BitmovinResponse {
  /**
   * Position of the stream in the media, starting from 0.
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

  constructor(obj?: Partial<MediaStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.position = map(obj.position);
    this.duration = map(obj.duration);
    this.codec = map(obj.codec);
  }
}

export default MediaStream;

