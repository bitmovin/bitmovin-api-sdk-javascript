import ConditionType from './ConditionType';
import DefaultManifestAndCondition from './DefaultManifestAndCondition';
import DefaultManifestAttributeCondition from './DefaultManifestAttributeCondition';
import DefaultManifestOrCondition from './DefaultManifestOrCondition';

export type DefaultManifestConditionUnion =
  DefaultManifestAttributeCondition |
  DefaultManifestAndCondition |
  DefaultManifestOrCondition;

/**
 * @export
 * @class DefaultManifestCondition
 */
export class DefaultManifestCondition {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof ConditionType]: string; } = {
    CONDITION: 'DefaultManifestAttributeCondition',
    AND: 'DefaultManifestAndCondition',
    OR: 'DefaultManifestOrCondition'
  };

  constructor(obj?: Partial<DefaultManifestCondition>) {
    if(!obj) {
      return;
    }
  }
}

export default DefaultManifestCondition;

