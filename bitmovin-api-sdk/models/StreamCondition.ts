import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import ConditionOperator from './ConditionOperator';
import ConditionType from './ConditionType';
import StreamConditionAttribute from './StreamConditionAttribute';

/**
 * @export
 * @class StreamCondition
 */
export default class StreamCondition extends AbstractCondition {
  constructor(obj: any) {
    super(obj);
    this.attribute = map(obj.attribute);
    this.operator = map(obj.operator);
    this.value = map(obj.value);
  }

  /**
   * @type {StreamConditionAttribute}
   * @memberof StreamCondition
   */
  public attribute: StreamConditionAttribute;
  /**
   * @type {ConditionOperator}
   * @memberof StreamCondition
   */
  public operator: ConditionOperator;
  /**
   * The value that should be used for comparison
   * @type {string}
   * @memberof StreamCondition
   */
  public value: string;
}
