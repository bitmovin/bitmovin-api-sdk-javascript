import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class BroadcastTsTransportConfiguration
 */
export class BroadcastTsTransportConfiguration {
  /**
   * Output rate in bps. The value zero implies to use minimal rate. The minimal rate leaves approximately 15kbps of null packets in the stream.
   * @type {number}
   * @memberof BroadcastTsTransportConfiguration
   */
  public muxrate?: number;

  /**
   * Stop mux on errors. If true, implies halt multiplexing when any error is encountered. If false, errors are ignored and multiplexing continues. Note that the recovery from an error will usually result in an illegal transport stream and artifacts on a decoder.
   * @type {boolean}
   * @memberof BroadcastTsTransportConfiguration
   */
  public stopOnError?: boolean;

  /**
   * If true, prevents adaptation fields with length field equal to zero in video, i.e., zero-length AF. Please note that this condition can only occur when pesAlign for the input stream is set to true.
   * @type {boolean}
   * @memberof BroadcastTsTransportConfiguration
   */
  public preventEmptyAdaptionFieldsInVideo?: boolean;

  /**
   * Program Association Table (PAT) repetition rate per second. Number of PATs per second.
   * @type {number}
   * @memberof BroadcastTsTransportConfiguration
   */
  public patRepetitionRatePerSec?: number;

  /**
   * Program Map Table (PMT) repetition rate per second. Number of PMTs for each program per second.
   * @type {number}
   * @memberof BroadcastTsTransportConfiguration
   */
  public pmtRepetitionRatePerSec?: number;

  /**
   * When false, the output stream is created at a constant bit rate. When true, the output rate is allowed to vary from a maximum rate set by the muxrate parameter down to the minimum required to carry the stream.
   * @type {boolean}
   * @memberof BroadcastTsTransportConfiguration
   */
  public variableMuxRate?: boolean;

  /**
   * Sets the presentation time stamp value for the first video frame. The timestamp is specified in the timescale of 90000
   * @type {number}
   * @memberof BroadcastTsTransportConfiguration
   */
  public initialPresentationTimeStamp?: number;

  /**
   * Sets the Program Clock Reference value at the beginning of the first packet for the transport stream. The PCR is specified in the timescale of 90000
   * @type {number}
   * @memberof BroadcastTsTransportConfiguration
   */
  public initialProgramClockReference?: number;

  constructor(obj?: Partial<BroadcastTsTransportConfiguration>) {
    if(!obj) {
      return;
    }
    this.muxrate = map(obj.muxrate);
    this.stopOnError = map(obj.stopOnError);
    this.preventEmptyAdaptionFieldsInVideo = map(obj.preventEmptyAdaptionFieldsInVideo);
    this.patRepetitionRatePerSec = map(obj.patRepetitionRatePerSec);
    this.pmtRepetitionRatePerSec = map(obj.pmtRepetitionRatePerSec);
    this.variableMuxRate = map(obj.variableMuxRate);
    this.initialPresentationTimeStamp = map(obj.initialPresentationTimeStamp);
    this.initialProgramClockReference = map(obj.initialProgramClockReference);
  }
}

export default BroadcastTsTransportConfiguration;

