import {map, mapArray} from '../common/Mapper';
import ConvertSccCaption from './ConvertSccCaption';
import Encoding from './Encoding';
import HistoryMuxing from './HistoryMuxing';
import HistoryStream from './HistoryStream';
import Keyframe from './Keyframe';
import LiveEncoding from './LiveEncoding';
import SidecarFile from './SidecarFile';
import StartEncodingRequest from './StartEncodingRequest';
import StartLiveEncodingRequest from './StartLiveEncodingRequest';
import StreamInput from './StreamInput';
import Task from './Task';
import TransferRetry from './TransferRetry';

/**
 * @export
 * @class HistoryEncoding
 */
export class HistoryEncoding {
  /**
   * Encoding
   * @type {Encoding}
   * @memberof HistoryEncoding
   */
  public encoding?: Encoding;

  /**
   * Live Details
   * @type {LiveEncoding}
   * @memberof HistoryEncoding
   */
  public live?: LiveEncoding;

  /**
   * VOD Encoding Start Request
   * @type {StartEncodingRequest}
   * @memberof HistoryEncoding
   */
  public vodStartReqeust?: StartEncodingRequest;

  /**
   * Live Encoding Start Request
   * @type {StartLiveEncodingRequest}
   * @memberof HistoryEncoding
   */
  public liveStartReqeust?: StartLiveEncodingRequest;

  /**
   * Encoding Status
   * @type {Task}
   * @memberof HistoryEncoding
   */
  public status?: Task;

  /**
   * @type {StreamInput[]}
   * @memberof HistoryEncoding
   */
  public inputStreams?: StreamInput[];

  /**
   * @type {HistoryStream[]}
   * @memberof HistoryEncoding
   */
  public streams?: HistoryStream[];

  /**
   * @type {HistoryMuxing[]}
   * @memberof HistoryEncoding
   */
  public muxings?: HistoryMuxing[];

  /**
   * @type {Keyframe[]}
   * @memberof HistoryEncoding
   */
  public keyFrames?: Keyframe[];

  /**
   * @type {SidecarFile[]}
   * @memberof HistoryEncoding
   */
  public sidecarFiles?: SidecarFile[];

  /**
   * @type {TransferRetry[]}
   * @memberof HistoryEncoding
   */
  public transferRetries?: TransferRetry[];

  /**
   * @type {ConvertSccCaption[]}
   * @memberof HistoryEncoding
   */
  public convertSccCaptions?: ConvertSccCaption[];

  constructor(obj?: Partial<HistoryEncoding>) {
    if(!obj) {
      return;
    }
    this.encoding = map(obj.encoding, Encoding);
    this.live = map(obj.live, LiveEncoding);
    this.vodStartReqeust = map(obj.vodStartReqeust, StartEncodingRequest);
    this.liveStartReqeust = map(obj.liveStartReqeust, StartLiveEncodingRequest);
    this.status = map(obj.status, Task);
    this.inputStreams = mapArray(obj.inputStreams, StreamInput);
    this.streams = mapArray(obj.streams, HistoryStream);
    this.muxings = mapArray(obj.muxings, HistoryMuxing);
    this.keyFrames = mapArray(obj.keyFrames, Keyframe);
    this.sidecarFiles = mapArray(obj.sidecarFiles, SidecarFile);
    this.transferRetries = mapArray(obj.transferRetries, TransferRetry);
    this.convertSccCaptions = mapArray(obj.convertSccCaptions, ConvertSccCaption);
  }
}

export default HistoryEncoding;

