import {map} from '../common/Mapper';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsContainsFilter from './AdAnalyticsContainsFilter';
import AdAnalyticsEqualFilter from './AdAnalyticsEqualFilter';
import AdAnalyticsGreaterThanFilter from './AdAnalyticsGreaterThanFilter';
import AdAnalyticsGreaterThanOrEqualFilter from './AdAnalyticsGreaterThanOrEqualFilter';
import AdAnalyticsInFilter from './AdAnalyticsInFilter';
import AdAnalyticsLessThanFilter from './AdAnalyticsLessThanFilter';
import AdAnalyticsLessThanOrEqualFilter from './AdAnalyticsLessThanOrEqualFilter';
import AdAnalyticsNotContainsFilter from './AdAnalyticsNotContainsFilter';
import AdAnalyticsNotEqualFilter from './AdAnalyticsNotEqualFilter';

/**
 * @export
 * @class AdAnalyticsAbstractFilter
 */
export class AdAnalyticsAbstractFilter {

  protected static readonly typeMap: any = {
    'IN': 'AdAnalyticsInFilter',
    'EQ': 'AdAnalyticsEqualFilter',
    'NE': 'AdAnalyticsNotEqualFilter',
    'LT': 'AdAnalyticsLessThanFilter',
    'LTE': 'AdAnalyticsLessThanOrEqualFilter',
    'GT': 'AdAnalyticsGreaterThanFilter',
    'GTE': 'AdAnalyticsGreaterThanOrEqualFilter',
    'CONTAINS': 'AdAnalyticsContainsFilter',
    'NOTCONTAINS': 'AdAnalyticsNotContainsFilter'
  };

  /**
   * @type {AdAnalyticsAttribute}
   * @memberof AdAnalyticsAbstractFilter
   */
  public name: AdAnalyticsAttribute;

  constructor(obj: Partial<AdAnalyticsAbstractFilter>) {
    this.name = map(obj.name);
  }
}

export default AdAnalyticsAbstractFilter;

