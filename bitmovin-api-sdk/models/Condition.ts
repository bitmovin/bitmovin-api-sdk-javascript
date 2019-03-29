import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import ConditionAttribute from './ConditionAttribute';
import ConditionOperator from './ConditionOperator';
import ConditionType from './ConditionType';

/**
 * @export
 * @class Condition
 */
export default class Condition extends AbstractCondition {
  constructor(obj: any) {
    super(obj);
    this.attribute = map(obj.attribute);
    this.operator = map(obj.operator);
    this.value = map(obj.value);
  }

  /**
   * @type {ConditionAttribute}
   * @memberof Condition
   */
  public attribute: ConditionAttribute;
  /**
   * @type {ConditionOperator}
   * @memberof Condition
   */
  public operator: ConditionOperator;
  /**
   * The value that should be used for comparison
   * @type {string}
   * @memberof Condition
   */
  public value: string;
}
