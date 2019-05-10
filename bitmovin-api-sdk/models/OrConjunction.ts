import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import AbstractConjunction from './AbstractConjunction';

/**
 * @export
 * @class OrConjunction
 */
export default class OrConjunction extends AbstractConjunction {
  constructor(obj: any) {
    super(obj);
  }

}
