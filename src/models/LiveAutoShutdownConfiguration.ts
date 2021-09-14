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

  constructor(obj?: Partial<LiveAutoShutdownConfiguration>) {
    if(!obj) {
      return;
    }
    this.bytesReadTimeoutSeconds = map(obj.bytesReadTimeoutSeconds);
    this.streamTimeoutMinutes = map(obj.streamTimeoutMinutes);
  }
}

export default LiveAutoShutdownConfiguration;

