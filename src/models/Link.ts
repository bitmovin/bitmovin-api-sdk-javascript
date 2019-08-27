import {map} from '../common/Mapper';

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

  constructor(obj: Partial<Link>) {

    this.href = obj.href;
    this.title = obj.title;
  }
}

export default Link;

