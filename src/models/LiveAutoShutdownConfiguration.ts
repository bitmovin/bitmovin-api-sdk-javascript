import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class LiveAutoShutdownConfiguration
 */
export class LiveAutoShutdownConfiguration {
  /**
   * Automatically shutdown the live stream if there is no input anymore for a predefined number of seconds.
   * @type {number}
   * @memberof LiveAutoShutdownConfiguration
   */
  public bytesReadTimeoutSeconds?: number;

  /**
   * Automatically shutdown the live stream after a predefined runtime in minutes.
   * @type {number}
   * @memberof LiveAutoShutdownConfiguration
   */
  public streamTimeoutMinutes?: number;

  /**
   * Automatically shutdown the live stream if input is never connected for a predefined number of minutes.
   * @type {number}
   * @memberof LiveAutoShutdownConfiguration
   */
  public waitingForFirstConnectTimeoutMinutes?: number;

  constructor(obj?: Partial<LiveAutoShutdownConfiguration>) {
    if(!obj) {
      return;
    }
    this.bytesReadTimeoutSeconds = map(obj.bytesReadTimeoutSeconds);
    this.streamTimeoutMinutes = map(obj.streamTimeoutMinutes);
    this.waitingForFirstConnectTimeoutMinutes = map(obj.waitingForFirstConnectTimeoutMinutes);
  }
}

export default LiveAutoShutdownConfiguration;

