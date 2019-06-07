import {map} from '../common/Mapper';

/**
 * @export
 * @class MuxingInformationVideoTrack
 */
export class MuxingInformationVideoTrack {
  constructor(obj: any) {
    this.index = map(obj.index);
    this.codec = map(obj.codec);
    this.codecIso = map(obj.codecIso);
    this.bitRate = map(obj.bitRate);
    this.rate = map(obj.rate);
    this.pixelFormat = map(obj.pixelFormat);
    this.frameMode = map(obj.frameMode);
    this.frameWidth = map(obj.frameWidth);
    this.frameHeight = map(obj.frameHeight);
    this.frameRate = map(obj.frameRate);
    this.startTime = map(obj.startTime);
    this.duration = map(obj.duration);
    this.numberOfFrames = map(obj.numberOfFrames);
    this.aspectRatio = map(obj.aspectRatio);
  }

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
}

export default MuxingInformationVideoTrack;

