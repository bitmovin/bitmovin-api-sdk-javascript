import {map, mapArray} from '../common/Mapper';
import Person from './Person';
import Song from './Song';

/**
 * @export
 * @class Credits
 */
export class Credits {
  /**
   * @type {Person[]}
   * @memberof Credits
   */
  public persons?: Person[];

  /**
   * @type {Song[]}
   * @memberof Credits
   */
  public songs?: Song[];

  constructor(obj?: Partial<Credits>) {
    if(!obj) {
      return;
    }
    this.persons = mapArray(obj.persons, Person);
    this.songs = mapArray(obj.songs, Song);
  }
}

export default Credits;

