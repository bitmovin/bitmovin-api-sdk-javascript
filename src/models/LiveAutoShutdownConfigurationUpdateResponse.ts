import {map, mapArray} from '../common/Mapper';
import LiveAutoShutdownConfiguration from './LiveAutoShutdownConfiguration';

/**
 * The auto shutdown configuration that was accepted and applied to the running Live Encoding, together with the instant the encoder armed the shutdown for.  `streamTimeoutMinutes` was applied from the moment the encoder accepted the update, not from the start of the encoding, so `scheduledShutdownAt` rather than the timeout value is what says when this encoding stops. 
 * @export
 * @class LiveAutoShutdownConfigurationUpdateResponse
 */
export class LiveAutoShutdownConfigurationUpdateResponse extends LiveAutoShutdownConfiguration {
  /**
   * The instant at which the Live Encoding is currently scheduled to shut down, as reported by the encoder. `null` means no shutdown is scheduled.  `bytesReadTimeoutSeconds` is not reflected here, as it only arms once the input stops flowing, so the encoding can still shut down earlier than this. 
   * @type {Date}
   * @memberof LiveAutoShutdownConfigurationUpdateResponse
   */
  public scheduledShutdownAt?: Date;

  constructor(obj?: Partial<LiveAutoShutdownConfigurationUpdateResponse>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.scheduledShutdownAt = map(obj.scheduledShutdownAt, Date);
  }
}

export default LiveAutoShutdownConfigurationUpdateResponse;

