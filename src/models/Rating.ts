import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Rating
 */
export class Rating {
  /**
   * @type {string}
   * @memberof Rating
   */
  public region?: string;

  /**
   * @type {string}
   * @memberof Rating
   */
  public system?: string;

  /**
   * @type {string}
   * @memberof Rating
   */
  public rating?: string;

  constructor(obj?: Partial<Rating>) {
    if(!obj) {
      return;
    }
    this.region = map(obj.region);
    this.system = map(obj.system);
    this.rating = map(obj.rating);
  }
}

export default Rating;

