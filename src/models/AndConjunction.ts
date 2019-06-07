import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';

/**
 * @export
 * @class AndConjunction
 */
export class AndConjunction extends AbstractConjunction {
  constructor(obj: any) {
    super(obj);
  }

}

export default AndConjunction;

