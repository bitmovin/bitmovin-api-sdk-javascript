import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class WatchFolderInput
 */
export class WatchFolderInput {
  /**
   * Input id (required)
   * @type {string}
   * @memberof WatchFolderInput
   */
  public inputId?: string;

  /**
   * Path of the directory to monitor (required)
   * @type {string}
   * @memberof WatchFolderInput
   */
  public inputPath?: string;

  constructor(obj?: Partial<WatchFolderInput>) {
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
  }
}

export default WatchFolderInput;

