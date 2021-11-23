import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Label
 */
export class Label {
  /**
   * Identifier of the label.
   * @type {number}
   * @memberof Label
   */
  public id?: number;

  /**
   * Specifies the language of the label.
   * @type {string}
   * @memberof Label
   */
  public lang?: string;

  /**
   * Content of the label. (required)
   * @type {string}
   * @memberof Label
   */
  public value?: string;

  constructor(obj?: Partial<Label>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.lang = map(obj.lang);
    this.value = map(obj.value);
  }
}

export default Label;

