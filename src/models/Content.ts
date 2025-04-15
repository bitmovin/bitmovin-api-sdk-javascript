import {map, mapArray} from '../common/Mapper';
import Character from './Character';
import SceneObject from './SceneObject';
import Setting from './Setting';

/**
 * @export
 * @class Content
 */
export class Content {
  /**
   * @type {Character[]}
   * @memberof Content
   */
  public characters?: Character[];

  /**
   * @type {SceneObject[]}
   * @memberof Content
   */
  public objects?: SceneObject[];

  /**
   * @type {Setting[]}
   * @memberof Content
   */
  public settings?: Setting[];

  constructor(obj?: Partial<Content>) {
    if(!obj) {
      return;
    }
    this.characters = mapArray(obj.characters, Character);
    this.objects = mapArray(obj.objects, SceneObject);
    this.settings = mapArray(obj.settings, Setting);
  }
}

export default Content;

