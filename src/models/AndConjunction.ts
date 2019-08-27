import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';

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
  public type: 'AND' = 'AND';

  constructor(obj: Partial<AndConjunction>) {
    super(obj);

  }
}

export default AndConjunction;

