import {map} from '../common/Mapper';
import AudioStream from './AudioStream';
import MediaStream from './MediaStream';
import SubtitleStream from './SubtitleStream';
import VideoStream from './VideoStream';

/**
 * @export
 * @class EncodingStreamInputDetails
 */
export default class EncodingStreamInputDetails {
  constructor(obj: any) {
    this.formatName = map(obj.formatName);
    this.startTime = map(obj.startTime);
    this.duration = map(obj.duration);
    this.size = map(obj.size);
    this.bitrate = map(obj.bitrate);
    this.tags = map(obj.tags);
    this.videoStreams = map<VideoStream>(obj.videoStreams, VideoStream);
    this.audioStreams = map<AudioStream>(obj.audioStreams, AudioStream);
    this.metaStreams = map<MediaStream>(obj.metaStreams, MediaStream);
    this.subtitleStreams = map<SubtitleStream>(obj.subtitleStreams, SubtitleStream);
  }

  /**
   * Format name
   * @type {string}
   * @memberof EncodingStreamInputDetails
   */
  public formatName?: string;
  /**
   * The start time in seconds
   * @type {number}
   * @memberof EncodingStreamInputDetails
   */
  public startTime?: number;
  /**
   * Duration in seconds
   * @type {number}
   * @memberof EncodingStreamInputDetails
   */
  public duration?: number;
  /**
   * Input file size in bytes
   * @type {number}
   * @memberof EncodingStreamInputDetails
   */
  public size?: number;
  /**
   * Bitrate in bps
   * @type {number}
   * @memberof EncodingStreamInputDetails
   */
  public bitrate?: number;
  /**
   * Additional metadata saved in the input file
   * @type {Array<string>}
   * @memberof EncodingStreamInputDetails
   */
  public tags?: Array<string>;
  /**
   * Video streams in the input file
   * @type {Array<VideoStream>}
   * @memberof EncodingStreamInputDetails
   */
  public videoStreams?: Array<VideoStream>;
  /**
   * Audio stream in the input file
   * @type {Array<AudioStream>}
   * @memberof EncodingStreamInputDetails
   */
  public audioStreams?: Array<AudioStream>;
  /**
   * Meta data streams in the input file
   * @type {Array<MediaStream>}
   * @memberof EncodingStreamInputDetails
   */
  public metaStreams?: Array<MediaStream>;
  /**
   * Subtitle streams in the input file
   * @type {Array<SubtitleStream>}
   * @memberof EncodingStreamInputDetails
   */
  public subtitleStreams?: Array<SubtitleStream>;
}
