import {map} from '../common/Mapper';

/**
 * @export
 * @class CustomAttribute
 */
export class CustomAttribute {
  /**
   * unique string identifier for the custom attribute (required)
   * @type {string}
   * @memberof CustomAttribute
   */
  public key?: string;

  /**
   * value of the custom attribute
   * @type {string}
   * @memberof CustomAttribute
   */
  public value?: string;

  constructor(obj: Partial<CustomAttribute>) {

    this.key = obj.key;
    this.value = obj.value;
  }
}

export default CustomAttribute;

