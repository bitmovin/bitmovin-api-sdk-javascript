import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Link
 */
export class Link {
  /**
   * webpage target URL (required)
   * @type {string}
   * @memberof Link
   */
  public href?: string;

  /**
   * Short description of the linked page
   * @type {string}
   * @memberof Link
   */
  public title?: string;

  constructor(obj?: Partial<Link>) {
    if(!obj) {
      return;
    }
    this.href = map(obj.href);
    this.title = map(obj.title);
  }
}

export default Link;

