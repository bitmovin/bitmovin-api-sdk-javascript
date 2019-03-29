import {map} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class DashMp4Representation
 */
export default class DashMp4Representation extends DashRepresentation {
  constructor(obj: any) {
    super(obj);
    this.filePath = map(obj.filePath);
  }

  /**
   * Path to the MP4 file
   * @type {string}
   * @memberof DashMp4Representation
   */
  public filePath: string;
}
