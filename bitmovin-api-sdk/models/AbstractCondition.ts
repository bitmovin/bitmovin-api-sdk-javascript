import {map} from '../common/Mapper';
import ConditionType from './ConditionType';

/**
 * @export
 * @class AbstractCondition
 */
export default class AbstractCondition {
  constructor(obj: any) {
    this.type = map(obj.type);
  }

  /**
   * @type {ConditionType}
   * @memberof AbstractCondition
   */
  public type?: ConditionType;
}
