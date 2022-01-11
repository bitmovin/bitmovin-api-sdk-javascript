import {map, mapArray} from '../common/Mapper';
import ConditionType from './ConditionType';
import DefaultManifestCondition from './DefaultManifestCondition';

/**
 * @export
 * @class DefaultManifestOrCondition
 */
export class DefaultManifestOrCondition extends DefaultManifestCondition {
  /**
   * Discriminator property for DefaultManifestCondition
   * @type {string}
   * @memberof DefaultManifestOrCondition
   */
  public readonly type: ConditionType = ConditionType.OR;

  /**
   * Array to perform the OR evaluation on. This conditions evaluates to true if at least one sub condition evaluates to true. 
   * @type {DefaultManifestCondition[]}
   * @memberof DefaultManifestOrCondition
   */
  public conditions?: DefaultManifestCondition[];

  constructor(obj?: Partial<DefaultManifestOrCondition>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.conditions = mapArray(obj.conditions, DefaultManifestCondition);
  }
}

export default DefaultManifestOrCondition;

