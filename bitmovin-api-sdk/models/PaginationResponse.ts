import {map} from '../common/Mapper';

/**
 * @export
 * @class PaginationResponse
 */
export default class PaginationResponse<T> {
  constructor(obj: any) {
    this.totalCount = map(obj.totalCount);
    this.offset = map(obj.offset);
    this.limit = map(obj.limit);
    this.previous = map(obj.previous);
    this.next = map(obj.next);
    this.items = map(obj.items);
  }

  /**
   * @type {number}
   * @memberof PaginationResponse
   */
  public totalCount?: number;
  /**
   * @type {number}
   * @memberof PaginationResponse
   */
  public offset?: number;
  /**
   * @type {number}
   * @memberof PaginationResponse
   */
  public limit?: number;
  /**
   * @type {string}
   * @memberof PaginationResponse
   */
  public previous?: string;
  /**
   * @type {string}
   * @memberof PaginationResponse
   */
  public next?: string;
  /**
   * @type {Array<T>}
   * @memberof PaginationResponse
   */
  public items?: Array<T>;
}
