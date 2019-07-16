import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import ConditionOperator from './ConditionOperator';

/**
 * @export
 * @class Condition
 */
export class Condition extends AbstractCondition {
  /**
   * The attribute that should be used for the evaluation. Valid values include, depending on the context: - HEIGHT - WIDTH - BITRATE - FPS - ASPECTRATIO - INPUTSTREAM - LANGUAGE - CHANNELFORMAT - CHANNELLAYOUT - STREAMCOUNT - AUDIOSTREAMCOUNT - VIDEOSTREAMCOUNT - DURATION - CONNECTION_STATUS - CONNECTION_STATUS_JUST_CHANGED (required)
   * @type {string}
   * @memberof Condition
   */
  public attribute: string;

  /**
   * The operator that should be used for the evaluation (required)
   * @type {ConditionOperator}
   * @memberof Condition
   */
  public operator: ConditionOperator;

  /**
   * The value that should be used for comparison (required)
   * @type {string}
   * @memberof Condition
   */
  public value: string;

  constructor(obj: Partial<Condition>) {
    super(obj);
    this.attribute = map(obj.attribute);
    this.operator = map(obj.operator);
    this.value = map(obj.value);
  }
}

export default Condition;

