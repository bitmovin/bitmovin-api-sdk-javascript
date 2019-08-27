import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import InsertableContentInput from './InsertableContentInput';
import InsertableContentStatus from './InsertableContentStatus';

/**
 * @export
 * @class InsertableContent
 */
export class InsertableContent extends BitmovinResource {
  /**
   * List of video files to be inserted in the live stream. These have to match the codec, aspect ration and frame rate of the live stream.
   * @type {InsertableContentInput[]}
   * @memberof InsertableContent
   */
  public inputs?: InsertableContentInput[];

  /**
   * Status of the insertable content.
   * @type {InsertableContentStatus}
   * @memberof InsertableContent
   */
  public status?: InsertableContentStatus;

  constructor(obj: Partial<InsertableContent>) {
    super(obj);

    this.inputs = map<InsertableContentInput>(obj.inputs, InsertableContentInput) || [];
    this.status = obj.status;
  }
}

export default InsertableContent;

