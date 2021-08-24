import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import WatchFolderInput from './WatchFolderInput';
import WatchFolderOutput from './WatchFolderOutput';
import WatchFolderStatus from './WatchFolderStatus';

/**
 * @export
 * @class WatchFolder
 */
export class WatchFolder extends BitmovinResource {
  /**
   * @type {WatchFolderInput}
   * @memberof WatchFolder
   */
  public input?: WatchFolderInput;

  /**
   * @type {WatchFolderOutput[]}
   * @memberof WatchFolder
   */
  public outputs?: WatchFolderOutput[];

  /**
   * The current status of the Watch Folder. The default value is `STOPPED` (required)
   * @type {WatchFolderStatus}
   * @memberof WatchFolder
   */
  public status?: WatchFolderStatus;

  /**
   * A description text of the current status (required)
   * @type {string}
   * @memberof WatchFolder
   */
  public statusText?: string;

  constructor(obj?: Partial<WatchFolder>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.input = map(obj.input, WatchFolderInput);
    this.outputs = mapArray(obj.outputs, WatchFolderOutput);
    this.status = map(obj.status);
    this.statusText = map(obj.statusText);
  }
}

export default WatchFolder;

