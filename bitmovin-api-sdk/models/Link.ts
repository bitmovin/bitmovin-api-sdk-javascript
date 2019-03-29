import {map} from '../common/Mapper';

/**
 * @export
 * @class Link
 */
export default class Link {
  constructor(obj: any) {
    this.href = map(obj.href);
    this.title = map(obj.title);
  }

  /**
   * webpage target URL
   * @type {string}
   * @memberof Link
   */
  public href: string;
  /**
   * Short description of the linked page
   * @type {string}
   * @memberof Link
   */
  public title?: string;
}
