import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SceneObject
 */
export class SceneObject {
  /**
   * Free-text description of the object in this scene.
   * @type {string}
   * @memberof SceneObject
   */
  public description?: string;

  /**
   * Kind of object in free text rather than a fixed category list.
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

