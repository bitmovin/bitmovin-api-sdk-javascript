import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';

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
  public type: 'OR' = 'OR';

  constructor(obj: Partial<OrConjunction>) {
    super(obj);

  }
}

export default OrConjunction;

