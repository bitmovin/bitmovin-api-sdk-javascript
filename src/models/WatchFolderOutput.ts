import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class WatchFolderOutput
 */
export class WatchFolderOutput {
  /**
   * Id of the corresponding output (required)
   * @type {string}
   * @memberof WatchFolderOutput
   */
  public outputId?: string;

  /**
   * Subdirectory where to save the files to (required)
   * @type {string}
   * @memberof WatchFolderOutput
   */
  public outputPath?: string;

  constructor(obj?: Partial<WatchFolderOutput>) {
    if(!obj) {
      return;
    }
    this.outputId = map(obj.outputId);
    this.outputPath = map(obj.outputPath);
  }
}

export default WatchFolderOutput;

