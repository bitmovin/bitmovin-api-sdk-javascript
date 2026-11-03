import {map, mapArray} from '../common/Mapper';
import Person from './Person';
import Song from './Song';

/**
 * @export
 * @class Credits
 */
export class Credits {
  /**
   * Selected people identified in the video credits.
   * @type {Person[]}
   * @memberof Credits
   */
  public persons?: Person[];

  /**
   * Songs extracted from recognized credit text, such as opening, ending or insert songs. This is not a list of all music heard in the video.
   * @type {Song[]}
   * @memberof Credits
   */
  public songs?: Song[];

  /**
   * Production copyright year extracted from on-screen credits. Empty, null or omitted when unavailable. This is not the full copyright notice or a determination of rights or licensing. Retains its original value in language-specific results.
   * @type {string}
   * @memberof Credits
   */
  public copyright?: string;

  constructor(obj?: Partial<Credits>) {
    if(!obj) {
      return;
    }
    this.persons = mapArray(obj.persons, Person);
    this.songs = mapArray(obj.songs, Song);
    this.copyright = map(obj.copyright);
  }
}

export default Credits;

