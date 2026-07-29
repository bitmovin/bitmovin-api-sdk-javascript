import {map, mapArray} from '../common/Mapper';
import Department from './Department';

/**
 * @export
 * @class Person
 */
export class Person {
  /**
   * @type {string}
   * @memberof Person
   */
  public name?: string;

  /**
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

