import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import ConditionType from './ConditionType';

/**
 * @export
 * @class AbstractConjunction
 */
export default class AbstractConjunction extends AbstractCondition {
  constructor(obj: any) {
    super(obj);
    this.conditions = map<AbstractCondition>(obj.conditions, AbstractCondition);
  }

  /**
   * Array to perform the AND/OR evaluation on
   * @type {Array<AbstractCondition>}
   * @memberof AbstractConjunction
   */
  public conditions?: Array<AbstractCondition>;
}
