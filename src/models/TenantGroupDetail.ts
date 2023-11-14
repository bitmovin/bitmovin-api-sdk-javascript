import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class TenantGroupDetail
 */
export class TenantGroupDetail {
  /**
   * Id of Group
   * @type {string}
   * @memberof TenantGroupDetail
   */
  public id?: string;

  /**
   * Name of Group
   * @type {string}
   * @memberof TenantGroupDetail
   */
  public name?: string;

  constructor(obj?: Partial<TenantGroupDetail>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.name = map(obj.name);
  }
}

export default TenantGroupDetail;

