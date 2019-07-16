import {map} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';

/**
 * @export
 * @class ProgressiveMuxingInformation
 */
export class ProgressiveMuxingInformation {
  /**
   * The mime type of the muxing
   * @type {string}
   * @memberof ProgressiveMuxingInformation
   */
  public mimeType?: string;

  /**
   * The file size of the muxing in bytes
   * @type {number}
   * @memberof ProgressiveMuxingInformation
   */
  public fileSize?: number;

  /**
   * The container format used
   * @type {string}
   * @memberof ProgressiveMuxingInformation
   */
  public containerFormat?: string;

  /**
   * The bitrate of the container if available (tracks + container overhead)
   * @type {number}
   * @memberof ProgressiveMuxingInformation
   */
  public containerBitrate?: number;

  /**
   * The duration of the container in seconds
   * @type {number}
   * @memberof ProgressiveMuxingInformation
   */
  public duration?: number;

  /**
   * Information about the video tracks in the container
   * @type {MuxingInformationVideoTrack[]}
   * @memberof ProgressiveMuxingInformation
   */
  public videoTracks?: MuxingInformationVideoTrack[];

  /**
   * Information about the audio tracks in the container
   * @type {MuxingInformationAudioTrack[]}
   * @memberof ProgressiveMuxingInformation
   */
  public audioTracks?: MuxingInformationAudioTrack[];

  constructor(obj: Partial<ProgressiveMuxingInformation>) {
    this.mimeType = map(obj.mimeType);
    this.fileSize = map(obj.fileSize);
    this.containerFormat = map(obj.containerFormat);
    this.containerBitrate = map(obj.containerBitrate);
    this.duration = map(obj.duration);
    this.videoTracks = map<MuxingInformationVideoTrack>(obj.videoTracks, MuxingInformationVideoTrack);
    this.audioTracks = map<MuxingInformationAudioTrack>(obj.audioTracks, MuxingInformationAudioTrack);
  }
}

export default ProgressiveMuxingInformation;

