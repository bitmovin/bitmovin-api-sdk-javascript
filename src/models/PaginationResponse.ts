import {map} from '../common/Mapper';

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

  constructor(obj: Partial<PaginationResponse<T>>, type: new(obj: any) => T) {

    this.totalCount = obj.totalCount;
    this.offset = obj.offset;
    this.limit = obj.limit;
    this.previous = obj.previous;
    this.next = obj.next;
    this.items = map<T>(obj.items, type) || [];
  }
}

export default PaginationResponse;

