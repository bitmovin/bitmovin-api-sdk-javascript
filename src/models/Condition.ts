import {map, mapArray} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import ConditionOperator from './ConditionOperator';
import ConditionType from './ConditionType';

/**
 * @export
 * @class Condition
 */
export class Condition extends AbstractCondition {
  /**
   * Discriminator property for AbstractCondition
   * @type {string}
   * @memberof Condition
   */
  public readonly type: ConditionType = ConditionType.CONDITION;

  /**
   * The attribute that should be used for the evaluation. Valid values include, depending on the context: - HEIGHT - WIDTH - BITRATE - FPS - ASPECTRATIO - INPUTSTREAM - LANGUAGE - CHANNELFORMAT - CHANNELLAYOUT - STREAMCOUNT - AUDIOSTREAMCOUNT - VIDEOSTREAMCOUNT - DURATION - ROTATION (required)
   * @type {string}
   * @memberof Condition
   */
  public attribute?: string;

  /**
   * The operator that should be used for the evaluation (required)
   * @type {ConditionOperator}
   * @memberof Condition
   */
  public operator?: ConditionOperator;

  /**
   * The value that should be used for comparison (required)
   * @type {string}
   * @memberof Condition
   */
  public value?: string;

  constructor(obj?: Partial<Condition>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.attribute = map(obj.attribute);
    this.operator = map(obj.operator);
    this.value = map(obj.value);
  }
}

export default Condition;

