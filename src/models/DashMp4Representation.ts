import {map, mapArray} from '../common/Mapper';
import DashOnDemandRepresentationType from './DashOnDemandRepresentationType';
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

  /**
   * The type of the dash representation
   * @type {DashOnDemandRepresentationType}
   * @memberof DashMp4Representation
   */
  public type?: DashOnDemandRepresentationType;

  constructor(obj?: Partial<DashMp4Representation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filePath = map(obj.filePath);
    this.type = map(obj.type);
  }
}

export default DashMp4Representation;

