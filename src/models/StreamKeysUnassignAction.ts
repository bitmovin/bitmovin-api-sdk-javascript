import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamKeysUnassignAction
 */
export class StreamKeysUnassignAction {
  /**
   * Encoding ID for which stream keys should be unassigned
   * @type {string}
   * @memberof StreamKeysUnassignAction
   */
  public encodingId?: string;

  constructor(obj?: Partial<StreamKeysUnassignAction>) {
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
  }
}

export default StreamKeysUnassignAction;

