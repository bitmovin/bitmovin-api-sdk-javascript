import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import OrganizationType from './OrganizationType';
import ResourceLimitContainer from './ResourceLimitContainer';

/**
 * @export
 * @class Organization
 */
export class Organization extends BitmovinResource {
  /**
   * @type {OrganizationType}
   * @memberof Organization
   */
  public type?: OrganizationType;

  /**
   * ID of the parent organization
   * @type {string}
   * @memberof Organization
   */
  public parentId?: string;

  /**
   * Hexadecimal color
   * @type {string}
   * @memberof Organization
   */
  public labelColor?: string;

  /**
   * @type {ResourceLimitContainer[]}
   * @memberof Organization
   */
  public limitsPerResource?: ResourceLimitContainer[];

  constructor(obj: Partial<Organization>) {
    super(obj);

    this.type = obj.type;
    this.parentId = obj.parentId;
    this.labelColor = obj.labelColor;
    this.limitsPerResource = map<ResourceLimitContainer>(obj.limitsPerResource, ResourceLimitContainer) || [];
  }
}

export default Organization;

