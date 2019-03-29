import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';
import ConditionType from './ConditionType';

/**
 * @export
 * @class OrConjunction
 */
export default class OrConjunction extends AbstractConjunction {
  constructor(obj: any) {
    super(obj);
  }

}
