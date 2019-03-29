import {map} from '../common/Mapper';
import Domain from './Domain';

/**
 * @export
 * @class DomainList
 */
export default class DomainList {
  constructor(obj: any) {
    this.domains = map<Domain>(obj.domains, Domain);
  }

  /**
   * @type {Array<Domain>}
   * @memberof DomainList
   */
  public domains?: Array<Domain>;
}
