import {map, mapArray} from '../common/Mapper';
import SubtaskMetadataData from './SubtaskMetadataData';

/**
 * @export
 * @class SubtaskMetadata
 */
export class SubtaskMetadata {
  /**
   * The timestamp of the metadata record (required)
   * @type {Date}
   * @memberof SubtaskMetadata
   */
  public date?: Date;

  /**
   * @type {SubtaskMetadataData}
   * @memberof SubtaskMetadata
   */
  public data?: SubtaskMetadataData;

  constructor(obj?: Partial<SubtaskMetadata>) {
    if(!obj) {
      return;
    }
    this.date = map(obj.date, Date);
    this.data = map(obj.data, SubtaskMetadataData);
  }
}

export default SubtaskMetadata;

