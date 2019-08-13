import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';

/**
 * @export
 * @class OrConjunction
 */
export class OrConjunction extends AbstractConjunction {
  constructor(obj: Partial<OrConjunction>) {
    super(obj);
  }
}

export default OrConjunction;

