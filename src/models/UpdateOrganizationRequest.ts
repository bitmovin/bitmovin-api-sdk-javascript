import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class UpdateOrganizationRequest
 */
export class UpdateOrganizationRequest {
  /**
   * @type {string}
   * @memberof UpdateOrganizationRequest
   */
  public name?: string;

  /**
   * @type {string}
   * @memberof UpdateOrganizationRequest
   */
  public description?: string;

  /**
   * Hexadecimal color
   * @type {string}
   * @memberof UpdateOrganizationRequest
   */
  public labelColor?: string;

  constructor(obj?: Partial<UpdateOrganizationRequest>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.description = map(obj.description);
    this.labelColor = map(obj.labelColor);
  }
}

export default UpdateOrganizationRequest;

