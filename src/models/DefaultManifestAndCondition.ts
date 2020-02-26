import {map, mapArray} from '../common/Mapper';
import ConditionType from './ConditionType';
import DefaultManifestCondition from './DefaultManifestCondition';

/**
 * @export
 * @class DefaultManifestAndCondition
 */
export class DefaultManifestAndCondition extends DefaultManifestCondition {
  /**
   * Discriminator property for DefaultManifestCondition
   * @type {string}
   * @memberof DefaultManifestAndCondition
   */
  public type: ConditionType.AND = ConditionType.AND;

  /**
   * Array to perform the AND evaluation on. This conditions evaluates to true if all sub conditions evaluate to true. 
   * @type {DefaultManifestCondition[]}
   * @memberof DefaultManifestAndCondition
   */
  public conditions?: DefaultManifestCondition[];

  constructor(obj?: Partial<DefaultManifestAndCondition>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.conditions = mapArray(obj.conditions, DefaultManifestCondition);
  }
}

export default DefaultManifestAndCondition;

