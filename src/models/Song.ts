import {map, mapArray} from '../common/Mapper';

/**
 * A song identified in the video credits. Retains its original values in language-specific results.
 * @export
 * @class Song
 */
export class Song {
  /**
   * Song title extracted from the credit text.
   * @type {string}
   * @memberof Song
   */
  public name?: string;

  /**
   * Artist associated with the song in the credit text.
   * @type {string}
   * @memberof Song
   */
  public artist?: string;

  constructor(obj?: Partial<Song>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.artist = map(obj.artist);
  }
}

export default Song;

