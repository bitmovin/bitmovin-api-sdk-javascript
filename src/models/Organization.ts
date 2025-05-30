import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import OrganizationType from './OrganizationType';
import ResourceLimitContainer from './ResourceLimitContainer';
import SignupSource from './SignupSource';

/**
 * @export
 * @class Organization
 */
export class Organization extends BitmovinResource {
  /**
   * Specifies the type of the organization in the hierachy. Only sub-organizations can be newly created. (required)
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

  /**
   * which platform initiated organisation creation
   * @type {SignupSource}
   * @memberof Organization
   */
  public signupSource?: SignupSource;

  /**
   * Flag indicating if MFA is required for the organization
   * @type {boolean}
   * @memberof Organization
   */
  public mfaRequired?: boolean;

  /**
   * ID of the user who owns the organization
   * @type {string}
   * @memberof Organization
   */
  public ownerUserId?: string;

  constructor(obj?: Partial<Organization>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
    this.parentId = map(obj.parentId);
    this.labelColor = map(obj.labelColor);
    this.limitsPerResource = mapArray(obj.limitsPerResource, ResourceLimitContainer);
    this.signupSource = map(obj.signupSource);
    this.mfaRequired = map(obj.mfaRequired);
    this.ownerUserId = map(obj.ownerUserId);
  }
}

export default Organization;

