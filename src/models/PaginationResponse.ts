import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PaginationResponse
 */
export class PaginationResponse<T> {
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
   * @type {T[]}
   * @memberof PaginationResponse
   */
  public items?: T[];

  constructor(obj?: Partial<PaginationResponse<T>>, type?: new(obj: any) => T) {
    if(!obj) {
      return;
    }
    this.totalCount = map(obj.totalCount);
    this.offset = map(obj.offset);
    this.limit = map(obj.limit);
    this.previous = map(obj.previous);
    this.next = map(obj.next);
    this.items = mapArray(obj.items, type!);
  }
}

export default PaginationResponse;

