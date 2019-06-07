import {map} from '../common/Mapper';

/**
 * @export
 * @class ApiErrorDefinition
 */
export class ApiErrorDefinition {
  constructor(obj: any) {
    this.code = map(obj.code);
    this.category = map(obj.category);
    this.description = map(obj.description);
  }

  /**
   * The error code.
   * @type {number}
   * @memberof ApiErrorDefinition
   */
  public code?: number;
  /**
   * The error category.
   * @type {string}
   * @memberof ApiErrorDefinition
   */
  public category?: string;
  /**
   * The returned error description.
   * @type {string}
   * @memberof ApiErrorDefinition
   */
  public description?: string;
}

export default ApiErrorDefinition;

