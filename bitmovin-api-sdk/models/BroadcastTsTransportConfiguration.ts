import {map} from '../common/Mapper';

/**
 * @export
 * @class BroadcastTsTransportConfiguration
 */
export default class BroadcastTsTransportConfiguration {
  constructor(obj: any) {
    this.muxrate = map(obj.muxrate);
    this.stopOnError = map(obj.stopOnError);
    this.preventEmptyAdaptionFieldsInVideo = map(obj.preventEmptyAdaptionFieldsInVideo);
    this.patRepetitionRatePerSec = map(obj.patRepetitionRatePerSec);
    this.pmtRepetitionRatePerSec = map(obj.pmtRepetitionRatePerSec);
  }

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
}
