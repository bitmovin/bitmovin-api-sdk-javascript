import {map, mapArray} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';

/**
 * @export
 * @class AbstractConjunction
 */
export class AbstractConjunction extends AbstractCondition {
  /**
   * Array to perform the AND/OR evaluation on
   * @type {AbstractCondition[]}
   * @memberof AbstractConjunction
   */
  public conditions?: AbstractCondition[];

  constructor(obj?: Partial<AbstractConjunction>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.conditions = mapArray(obj.conditions, AbstractCondition);
  }
}

export default AbstractConjunction;

