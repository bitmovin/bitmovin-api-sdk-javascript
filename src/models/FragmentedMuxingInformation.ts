import {map, mapArray} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';

/**
 * @export
 * @class FragmentedMuxingInformation
 */
export class FragmentedMuxingInformation {
  /**
   * The mime type of the muxing
   * @type {string}
   * @memberof FragmentedMuxingInformation
   */
  public mimeType?: string;

  /**
   * The file size of the muxing in bytes
   * @type {number}
   * @memberof FragmentedMuxingInformation
   */
  public fileSize?: number;

  /**
   * The container format used
   * @type {string}
   * @memberof FragmentedMuxingInformation
   */
  public containerFormat?: string;

  /**
   * The bitrate of the container if available (tracks + container overhead)
   * @type {number}
   * @memberof FragmentedMuxingInformation
   */
  public containerBitrate?: number;

  /**
   * The duration of the container in seconds
   * @type {number}
   * @memberof FragmentedMuxingInformation
   */
  public duration?: number;

  /**
   * Information about the video tracks in the container
   * @type {MuxingInformationVideoTrack[]}
   * @memberof FragmentedMuxingInformation
   */
  public videoTracks?: MuxingInformationVideoTrack[];

  /**
   * Information about the audio tracks in the container
   * @type {MuxingInformationAudioTrack[]}
   * @memberof FragmentedMuxingInformation
   */
  public audioTracks?: MuxingInformationAudioTrack[];

  constructor(obj?: Partial<FragmentedMuxingInformation>) {
    if(!obj) {
      return;
    }
    this.mimeType = map(obj.mimeType);
    this.fileSize = map(obj.fileSize);
    this.containerFormat = map(obj.containerFormat);
    this.containerBitrate = map(obj.containerBitrate);
    this.duration = map(obj.duration);
    this.videoTracks = mapArray(obj.videoTracks, MuxingInformationVideoTrack);
    this.audioTracks = mapArray(obj.audioTracks, MuxingInformationAudioTrack);
  }
}

export default FragmentedMuxingInformation;

