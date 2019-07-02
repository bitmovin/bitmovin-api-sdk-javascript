import {map} from '../common/Mapper';

/**
 * @export
 * @class TsStreamConfiguration
 */
export class TsStreamConfiguration {
  constructor(obj: any) {
    this.streamId = map(obj.streamId);
    this.pid = map(obj.pid);
  }

  /**
   * The UUID of the stream to which this configuration belongs to. This has to be a ID of a stream that has been added to the current muxing. (required)
   * @type {string}
   * @memberof TsStreamConfiguration
   */
  public streamId: string;
  /**
   * An integer value. MPEG Transport Stream Packet Identifier (PID) for this stream. (required)
   * @type {number}
   * @memberof TsStreamConfiguration
   */
  public pid: number;
}

export default TsStreamConfiguration;

