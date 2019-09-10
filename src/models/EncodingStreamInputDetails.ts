import {map, mapArray} from '../common/Mapper';
import AudioStream from './AudioStream';
import MediaStream from './MediaStream';
import SubtitleStream from './SubtitleStream';
import VideoStream from './VideoStream';

/**
 * @export
 * @class EncodingStreamInputDetails
 */
export class EncodingStreamInputDetails {
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
   * @type {{ [key: string]: any; }}
   * @memberof EncodingStreamInputDetails
   */
  public tags?: { [key: string]: any; };

  /**
   * Video streams in the input file
   * @type {VideoStream[]}
   * @memberof EncodingStreamInputDetails
   */
  public videoStreams?: VideoStream[];

  /**
   * Audio stream in the input file
   * @type {AudioStream[]}
   * @memberof EncodingStreamInputDetails
   */
  public audioStreams?: AudioStream[];

  /**
   * Meta data streams in the input file
   * @type {MediaStream[]}
   * @memberof EncodingStreamInputDetails
   */
  public metaStreams?: MediaStream[];

  /**
   * Subtitle streams in the input file
   * @type {SubtitleStream[]}
   * @memberof EncodingStreamInputDetails
   */
  public subtitleStreams?: SubtitleStream[];

  constructor(obj?: Partial<EncodingStreamInputDetails>) {
    if(!obj) {
      return;
    }
    this.formatName = map(obj.formatName);
    this.startTime = map(obj.startTime);
    this.duration = map(obj.duration);
    this.size = map(obj.size);
    this.bitrate = map(obj.bitrate);
    this.tags = map(obj.tags);
    this.videoStreams = mapArray(obj.videoStreams, VideoStream);
    this.audioStreams = mapArray(obj.audioStreams, AudioStream);
    this.metaStreams = mapArray(obj.metaStreams, MediaStream);
    this.subtitleStreams = mapArray(obj.subtitleStreams, SubtitleStream);
  }
}

export default EncodingStreamInputDetails;

