import {map} from '../common/Mapper';
import StreamInfosDetails from './StreamInfosDetails';

/**
 * @export
 * @class StreamInfos
 */
export class StreamInfos {
  /**
   * Timestamp of the event formatted in UTC: YYYY-MM-DDThh:mm:ssZ (required)
   * @type {Date}
   * @memberof StreamInfos
   */
  public time?: Date;

  /**
   * Details about billable minutes for each resolution category
   * @type {StreamInfosDetails[]}
   * @memberof StreamInfos
   */
  public streamInfos?: StreamInfosDetails[];

  constructor(obj: Partial<StreamInfos>) {

    this.time = map<Date>(obj.time, Date);
    this.streamInfos = map<StreamInfosDetails>(obj.streamInfos, StreamInfosDetails) || [];
  }
}

export default StreamInfos;

