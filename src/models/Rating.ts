import {map, mapArray} from '../common/Mapper';

/**
 * An estimated content rating. Retains its original values in language-specific results.
 * @export
 * @class Rating
 */
export class Rating {
  /**
   * Region to which this estimated rating applies, such as US, UK or EU.
   * @type {string}
   * @memberof Rating
   */
  public region?: string;

  /**
   * Name of the movie or television rating system used for this estimate.
   * @type {string}
   * @memberof Rating
   */
  public system?: string;

  /**
   * AI-estimated rating label within the indicated system. Can be empty when no estimate is available.
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

