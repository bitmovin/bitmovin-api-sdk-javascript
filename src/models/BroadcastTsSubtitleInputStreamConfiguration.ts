import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class BroadcastTsSubtitleInputStreamConfiguration
 */
export class BroadcastTsSubtitleInputStreamConfiguration {
  /**
   * The UUID of the subtitle stream to which this configuration belongs to. This has to be an ID of an subtitle stream that has been added to the current muxing. 
   * @type {string}
   * @memberof BroadcastTsSubtitleInputStreamConfiguration
   */
  public streamId?: string;

  /**
   * An integer value. Packet Identifier (PID) for this stream.
   * @type {number}
   * @memberof BroadcastTsSubtitleInputStreamConfiguration
   */
  public packetIdentifier?: number;

  /**
   * The rate parameter determines the maximum rate in bits per second that should be used for the subtitle stream. The valid range is `100` to `60 000 000` bps or `0`. If the value is set to 0, we will examine the first 100 packets of subtitle packet data and use the highest rate that was computed. If the value is set too low, not enough to accommodate the subtitle bit-rate, then some PES packets corresponding to DVB subtitle stream will be dropped. This parameter is optional and the default value is 0. 
   * @type {number}
   * @memberof BroadcastTsSubtitleInputStreamConfiguration
   */
  public rate?: number;

  constructor(obj?: Partial<BroadcastTsSubtitleInputStreamConfiguration>) {
    if(!obj) {
      return;
    }
    this.streamId = map(obj.streamId);
    this.packetIdentifier = map(obj.packetIdentifier);
    this.rate = map(obj.rate);
  }
}

export default BroadcastTsSubtitleInputStreamConfiguration;

