import {map} from '../common/Mapper';

/**
 * @export
 * @class MuxingInformationVideoTrack
 */
export class MuxingInformationVideoTrack {
  /**
   * The stream index in the container
   * @type {number}
   * @memberof MuxingInformationVideoTrack
   */
  public index?: number;

  /**
   * The codec used for the track
   * @type {string}
   * @memberof MuxingInformationVideoTrack
   */
  public codec?: string;

  /**
   * The codec string of the track
   * @type {string}
   * @memberof MuxingInformationVideoTrack
   */
  public codecIso?: string;

  /**
   * The bitrate of the video track
   * @type {number}
   * @memberof MuxingInformationVideoTrack
   */
  public bitRate?: number;

  /**
   * TODO add description
   * @type {number}
   * @memberof MuxingInformationVideoTrack
   */
  public rate?: number;

  /**
   * The pixel format used
   * @type {string}
   * @memberof MuxingInformationVideoTrack
   */
  public pixelFormat?: string;

  /**
   * The frame mode (e.g. progressive)
   * @type {string}
   * @memberof MuxingInformationVideoTrack
   */
  public frameMode?: string;

  /**
   * The width of the frame in pixel
   * @type {number}
   * @memberof MuxingInformationVideoTrack
   */
  public frameWidth?: number;

  /**
   * The height of the frame in pixel
   * @type {number}
   * @memberof MuxingInformationVideoTrack
   */
  public frameHeight?: number;

  /**
   * The frame rate of the stream in fractional format
   * @type {string}
   * @memberof MuxingInformationVideoTrack
   */
  public frameRate?: string;

  /**
   * The start time in seconds
   * @type {number}
   * @memberof MuxingInformationVideoTrack
   */
  public startTime?: number;

  /**
   * The duration in seconds
   * @type {number}
   * @memberof MuxingInformationVideoTrack
   */
  public duration?: number;

  /**
   * The number of frames of that video track
   * @type {number}
   * @memberof MuxingInformationVideoTrack
   */
  public numberOfFrames?: number;

  /**
   * The aspect ratio of the stream
   * @type {string}
   * @memberof MuxingInformationVideoTrack
   */
  public aspectRatio?: string;

  constructor(obj: Partial<MuxingInformationVideoTrack>) {

    this.index = obj.index;
    this.codec = obj.codec;
    this.codecIso = obj.codecIso;
    this.bitRate = obj.bitRate;
    this.rate = obj.rate;
    this.pixelFormat = obj.pixelFormat;
    this.frameMode = obj.frameMode;
    this.frameWidth = obj.frameWidth;
    this.frameHeight = obj.frameHeight;
    this.frameRate = obj.frameRate;
    this.startTime = obj.startTime;
    this.duration = obj.duration;
    this.numberOfFrames = obj.numberOfFrames;
    this.aspectRatio = obj.aspectRatio;
  }
}

export default MuxingInformationVideoTrack;

