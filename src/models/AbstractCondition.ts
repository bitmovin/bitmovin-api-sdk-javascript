import AndConjunction from './AndConjunction';
import Condition from './Condition';
import OrConjunction from './OrConjunction';

/**
 * @export
 * @class AbstractCondition
 */
export class AbstractCondition {

  protected static readonly typeMap: any = {
    'CONDITION': 'Condition',
    'AND': 'AndConjunction',
    'OR': 'OrConjunction'
  };

  constructor(obj: Partial<AbstractCondition>) {
  }
}

export default AbstractCondition;

