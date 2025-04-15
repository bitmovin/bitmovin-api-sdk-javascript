import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SceneObject
 */
export class SceneObject {
  /**
   * @type {string}
   * @memberof SceneObject
   */
  public description?: string;

  /**
   * @type {string}
   * @memberof SceneObject
   */
  public category?: string;

  constructor(obj?: Partial<SceneObject>) {
    if(!obj) {
      return;
    }
    this.description = map(obj.description);
    this.category = map(obj.category);
  }
}

export default SceneObject;

