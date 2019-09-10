import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class TsProgramClockReferenceConfiguration
 */
export class TsProgramClockReferenceConfiguration {
  /**
   * An integer value. Packet Identifier (PID) for the MPEG Transport Stream PCR. This should generally point to the video stream PID. If it is not explicitly set it will point to the video stream PID if exists, otherwise to the audio stream PID.
   * @type {number}
   * @memberof TsProgramClockReferenceConfiguration
   */
  public pid?: number;

  /**
   * An integer value. Nominal time between MPEG Transport Stream PCRs in milliseconds.
   * @type {number}
   * @memberof TsProgramClockReferenceConfiguration
   */
  public interval?: number;

  constructor(obj?: Partial<TsProgramClockReferenceConfiguration>) {
    if(!obj) {
      return;
    }
    this.pid = map(obj.pid);
    this.interval = map(obj.interval);
  }
}

export default TsProgramClockReferenceConfiguration;

