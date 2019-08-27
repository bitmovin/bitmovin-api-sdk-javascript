import {map} from '../common/Mapper';

/**
 * @export
 * @class TsStreamConfiguration
 */
export class TsStreamConfiguration {
  /**
   * The UUID of the stream to which this configuration belongs to. This has to be a ID of a stream that has been added to the current muxing. (required)
   * @type {string}
   * @memberof TsStreamConfiguration
   */
  public streamId?: string;

  /**
   * An integer value. MPEG Transport Stream Packet Identifier (PID) for this stream. (required)
   * @type {number}
   * @memberof TsStreamConfiguration
   */
  public pid?: number;

  constructor(obj: Partial<TsStreamConfiguration>) {

    this.streamId = obj.streamId;
    this.pid = obj.pid;
  }
}

export default TsStreamConfiguration;

