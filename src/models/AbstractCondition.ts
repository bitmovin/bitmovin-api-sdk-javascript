import AndConjunction from './AndConjunction';
import Condition from './Condition';
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
  protected static readonly _discriminatorMapping: { [key: string]: string; } = {
    'CONDITION': 'Condition',
    'AND': 'AndConjunction',
    'OR': 'OrConjunction'
  };

  constructor(obj: Partial<AbstractCondition>) {

  }
}

export default AbstractCondition;

