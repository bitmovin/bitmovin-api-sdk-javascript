import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';
import ConditionType from './ConditionType';

/**
 * @export
 * @class OrConjunction
 */
export class OrConjunction extends AbstractConjunction {
  /**
   * Discriminator property for AbstractCondition
   * @type {string}
   * @memberof OrConjunction
   */
  public type: ConditionType.OR = ConditionType.OR;

  constructor(obj?: Partial<OrConjunction>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default OrConjunction;

