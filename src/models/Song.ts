import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Song
 */
export class Song {
  /**
   * @type {string}
   * @memberof Song
   */
  public name?: string;

  /**
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

