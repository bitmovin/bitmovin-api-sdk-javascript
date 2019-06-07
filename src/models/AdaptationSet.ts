import {map} from '../common/Mapper';
import Accessibility from './Accessibility';
import AdaptationSetRole from './AdaptationSetRole';
import BitmovinResponse from './BitmovinResponse';
import CustomAttribute from './CustomAttribute';

/**
 * @export
 * @class AdaptationSet
 */
export class AdaptationSet extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.customAttributes = map<CustomAttribute>(obj.customAttributes, CustomAttribute);
    this.roles = map(obj.roles);
    this.accessibilities = map<Accessibility>(obj.accessibilities, Accessibility);
  }

  /**
   * Custom adaptation set attributes
   * @type {Array<CustomAttribute>}
   * @memberof AdaptationSet
   */
  public customAttributes?: Array<CustomAttribute>;
  /**
   * Roles of the adaptation set
   * @type {Array<AdaptationSetRole>}
   * @memberof AdaptationSet
   */
  public roles?: Array<AdaptationSetRole>;
  /**
   * Provide signaling of CEA 607 and CEA 708
   * @type {Array<Accessibility>}
   * @memberof AdaptationSet
   */
  public accessibilities?: Array<Accessibility>;
}

export default AdaptationSet;

