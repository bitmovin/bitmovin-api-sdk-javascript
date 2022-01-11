import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';
import ConditionType from './ConditionType';

/**
 * @export
 * @class AndConjunction
 */
export class AndConjunction extends AbstractConjunction {
  /**
   * Discriminator property for AbstractCondition
   * @type {string}
   * @memberof AndConjunction
   */
  public readonly type: ConditionType = ConditionType.AND;

  constructor(obj?: Partial<AndConjunction>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default AndConjunction;

