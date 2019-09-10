import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class IFramePlaylist
 */
export class IFramePlaylist extends BitmovinResource {
  /**
   * The filename of your I-frame playlist (required)
   * @type {string}
   * @memberof IFramePlaylist
   */
  public filename?: string;

  constructor(obj?: Partial<IFramePlaylist>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
  }
}

export default IFramePlaylist;

