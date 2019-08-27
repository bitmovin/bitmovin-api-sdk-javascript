import {map} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class DashMp4Representation
 */
export class DashMp4Representation extends DashRepresentation {
  /**
   * Path to the MP4 file (required)
   * @type {string}
   * @memberof DashMp4Representation
   */
  public filePath?: string;

  constructor(obj: Partial<DashMp4Representation>) {
    super(obj);

    this.filePath = obj.filePath;
  }
}

export default DashMp4Representation;

