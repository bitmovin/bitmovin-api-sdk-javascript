import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import PrewarmedEncoderPoolAction from './PrewarmedEncoderPoolAction';

/**
 * @export
 * @class PrewarmedEncoderPoolSchedule
 */
export class PrewarmedEncoderPoolSchedule extends BitmovinResponse {
  /**
   * The action to be triggered by the schedule (start or stop) (required)
   * @type {PrewarmedEncoderPoolAction}
   * @memberof PrewarmedEncoderPoolSchedule
   */
  public action?: PrewarmedEncoderPoolAction;

  /**
   * An instant in the future when the specified action should be triggered. Given as UTC expressed in ISO 8601 format (\"YYYY-MM-DDThh:mm:ssZ\"). Seconds will be ignored. (required)
   * @type {Date}
   * @memberof PrewarmedEncoderPoolSchedule
   */
  public triggerDate?: Date;

  constructor(obj?: Partial<PrewarmedEncoderPoolSchedule>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.action = map(obj.action);
    this.triggerDate = map(obj.triggerDate, Date);
  }
}

export default PrewarmedEncoderPoolSchedule;

