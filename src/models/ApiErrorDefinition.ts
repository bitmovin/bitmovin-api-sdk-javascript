import {map} from '../common/Mapper';

/**
 * @export
 * @class ApiErrorDefinition
 */
export class ApiErrorDefinition {
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

  constructor(obj: Partial<ApiErrorDefinition>) {

    this.code = obj.code;
    this.category = obj.category;
    this.description = obj.description;
  }
}

export default ApiErrorDefinition;

