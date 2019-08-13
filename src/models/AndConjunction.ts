import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';

/**
 * @export
 * @class AndConjunction
 */
export class AndConjunction extends AbstractConjunction {
  constructor(obj: Partial<AndConjunction>) {
    super(obj);
  }
}

export default AndConjunction;

