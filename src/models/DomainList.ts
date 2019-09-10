import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<DomainList>) {
    if(!obj) {
      return;
    }
    this.domains = mapArray(obj.domains, Domain);
  }
}

export default DomainList;

