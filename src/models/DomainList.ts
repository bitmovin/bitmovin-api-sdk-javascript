import {map} from '../common/Mapper';
import Domain from './Domain';

/**
 * @export
 * @class DomainList
 */
export class DomainList {
  /**
   * @type {Domain[]}
   * @memberof DomainList
   */
  public domains?: Domain[];

  constructor(obj: Partial<DomainList>) {
    this.domains = map<Domain>(obj.domains, Domain);
  }
}

export default DomainList;

