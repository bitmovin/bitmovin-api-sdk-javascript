import AnalyticsImpressionSample from './AnalyticsImpressionSample';

/**
 * @export
 * @class AnalyticsImpressionDetails
 */
export class AnalyticsImpressionDetails extends Array<AnalyticsImpressionSample> {
  constructor(obj?: any) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default AnalyticsImpressionDetails;

