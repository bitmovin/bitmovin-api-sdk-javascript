import {map} from '../common/Mapper';

/**
 * @export
 * @class CustomAttribute
 */
export class CustomAttribute {
  constructor(obj: any) {
    this.key = map(obj.key);
    this.value = map(obj.value);
  }

  /**
   * unique string identifier for the custom attribute (required)
   * @type {string}
   * @memberof CustomAttribute
   */
  public key: string;
  /**
   * value of the custom attribute
   * @type {string}
   * @memberof CustomAttribute
   */
  public value?: string;
}

export default CustomAttribute;

