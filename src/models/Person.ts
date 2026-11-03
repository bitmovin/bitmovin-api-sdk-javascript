import {map, mapArray} from '../common/Mapper';
import Department from './Department';

/**
 * @export
 * @class Person
 */
export class Person {
  /**
   * Name of the credited person extracted from the credit text.
   * @type {string}
   * @memberof Person
   */
  public name?: string;

  /**
   * Credited role, or the portrayed character for acting credits when available.
   * @type {string}
   * @memberof Person
   */
  public role?: string;

  /**
   * The detected department of a person
   * @type {Department}
   * @memberof Person
   */
  public department?: Department;

  constructor(obj?: Partial<Person>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.role = map(obj.role);
    this.department = map(obj.department);
  }
}

export default Person;

