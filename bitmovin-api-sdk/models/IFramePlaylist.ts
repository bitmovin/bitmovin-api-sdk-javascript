import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class IFramePlaylist
 */
export default class IFramePlaylist extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.filename = map(obj.filename);
  }

  /**
   * The filename of your I-frame playlist
   * @type {string}
   * @memberof IFramePlaylist
   */
  public filename: string;
}
