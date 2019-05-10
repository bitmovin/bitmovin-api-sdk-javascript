import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';

/**
 * @export
 * @class AndConjunction
 */
export default class AndConjunction extends AbstractConjunction {
  constructor(obj: any) {
    super(obj);
  }

}
