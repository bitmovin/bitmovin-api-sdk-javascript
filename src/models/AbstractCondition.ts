import AndConjunction from './AndConjunction';
import Condition from './Condition';
import ConditionType from './ConditionType';
import OrConjunction from './OrConjunction';

export type AbstractConditionUnion =
  Condition |
  AndConjunction |
  OrConjunction;

/**
 * @export
 * @class AbstractCondition
 */
export class AbstractCondition {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof ConditionType]: string; } = {
    CONDITION: 'Condition',
    AND: 'AndConjunction',
    OR: 'OrConjunction'
  };

  constructor(obj?: Partial<AbstractCondition>) {
    if(!obj) {
      return;
    }
  }
}

export default AbstractCondition;

