import {map} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class DashMp4Representation
 */
export class DashMp4Representation extends DashRepresentation {
  constructor(obj: any) {
    super(obj);
    this.filePath = map(obj.filePath);
  }

  /**
   * Path to the MP4 file (required)
   * @type {string}
   * @memberof DashMp4Representation
   */
  public filePath: string;
}

export default DashMp4Representation;

