import {map} from '../common/Mapper';

/**
 * @export
 * @class MuxingInformationAudioTrack
 */
export class MuxingInformationAudioTrack {
  /**
   * The stream index in the container
   * @type {number}
   * @memberof MuxingInformationAudioTrack
   */
  public index?: number;

  /**
   * The codec used for the track
   * @type {string}
   * @memberof MuxingInformationAudioTrack
   */
  public codec?: string;

  /**
   * The codec string of the track
   * @type {string}
   * @memberof MuxingInformationAudioTrack
   */
  public codecIso?: string;

  /**
   * The bitrate of the audio track
   * @type {number}
   * @memberof MuxingInformationAudioTrack
   */
  public bitRate?: number;

  /**
   * @type {number}
   * @memberof MuxingInformationAudioTrack
   */
  public rate?: number;

  /**
   * The sampling rate of the audio stream
   * @type {number}
   * @memberof MuxingInformationAudioTrack
   */
  public sampleRate?: number;

  /**
   * The number of channels in this audio stream
   * @type {number}
   * @memberof MuxingInformationAudioTrack
   */
  public channels?: number;

  /**
   * TODO add description
   * @type {number}
   * @memberof MuxingInformationAudioTrack
   */
  public duration?: number;

  constructor(obj: Partial<MuxingInformationAudioTrack>) {

    this.index = obj.index;
    this.codec = obj.codec;
    this.codecIso = obj.codecIso;
    this.bitRate = obj.bitRate;
    this.rate = obj.rate;
    this.sampleRate = obj.sampleRate;
    this.channels = obj.channels;
    this.duration = obj.duration;
  }
}

export default MuxingInformationAudioTrack;

