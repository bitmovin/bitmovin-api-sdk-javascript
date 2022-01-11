import {map, mapArray} from '../common/Mapper';
import DashMuxingRepresentation from './DashMuxingRepresentation';
import DashOnDemandRepresentationType from './DashOnDemandRepresentationType';
import DashRepresentationTypeDiscriminator from './DashRepresentationTypeDiscriminator';

/**
 * @export
 * @class DashMp4Representation
 */
export class DashMp4Representation extends DashMuxingRepresentation {
  /**
   * Discriminator property for DashRepresentation
   * @type {string}
   * @memberof DashMp4Representation
   */
  public readonly typeDiscriminator: DashRepresentationTypeDiscriminator = DashRepresentationTypeDiscriminator.MP4;

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

