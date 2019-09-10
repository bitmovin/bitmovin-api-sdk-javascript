import {map, mapArray} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsContainsFilter from './AnalyticsContainsFilter';
import AnalyticsEqualFilter from './AnalyticsEqualFilter';
import AnalyticsGreaterThanFilter from './AnalyticsGreaterThanFilter';
import AnalyticsGreaterThanOrEqualFilter from './AnalyticsGreaterThanOrEqualFilter';
import AnalyticsInFilter from './AnalyticsInFilter';
import AnalyticsLessThanFilter from './AnalyticsLessThanFilter';
import AnalyticsLessThanOrEqualFilter from './AnalyticsLessThanOrEqualFilter';
import AnalyticsNotContainsFilter from './AnalyticsNotContainsFilter';
import AnalyticsNotEqualFilter from './AnalyticsNotEqualFilter';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

export type AnalyticsAbstractFilterUnion =
  AnalyticsInFilter |
  AnalyticsEqualFilter |
  AnalyticsNotEqualFilter |
  AnalyticsLessThanFilter |
  AnalyticsLessThanOrEqualFilter |
  AnalyticsGreaterThanFilter |
  AnalyticsGreaterThanOrEqualFilter |
  AnalyticsContainsFilter |
  AnalyticsNotContainsFilter;

/**
 * @export
 * @class AnalyticsAbstractFilter
 */
export class AnalyticsAbstractFilter {
  protected static readonly _discriminatorName = 'operator';
  protected static readonly _discriminatorMapping: { [key in keyof typeof AnalyticsQueryOperator]: string; } = {
    IN: 'AnalyticsInFilter',
    EQ: 'AnalyticsEqualFilter',
    NE: 'AnalyticsNotEqualFilter',
    LT: 'AnalyticsLessThanFilter',
    LTE: 'AnalyticsLessThanOrEqualFilter',
    GT: 'AnalyticsGreaterThanFilter',
    GTE: 'AnalyticsGreaterThanOrEqualFilter',
    CONTAINS: 'AnalyticsContainsFilter',
    NOTCONTAINS: 'AnalyticsNotContainsFilter'
  };

  /**
   * @type {AnalyticsAttribute}
   * @memberof AnalyticsAbstractFilter
   */
  public name?: AnalyticsAttribute;

  constructor(obj?: Partial<AnalyticsAbstractFilter>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
  }
}

export default AnalyticsAbstractFilter;

