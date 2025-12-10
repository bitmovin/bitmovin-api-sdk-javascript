import {map, mapArray} from '../common/Mapper';

/**
 * Details about an individual stream within the live ingest.
 * @export
 * @class LiveEncodingHeartbeatIngestStream
 */
export class LiveEncodingHeartbeatIngestStream {
  /**
   * Unique identifier of the stream.
   * @type {string}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public streamId?: string;

  /**
   * Media type for the stream (e.g., \"video\" or \"audio\").
   * @type {string}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public mediaType?: string;

  /**
   * Width of the video stream in pixels.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public width?: number;

  /**
   * Height of the video stream in pixels.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public height?: number;

  /**
   * Frame rate of the video stream.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public rate?: number;

  /**
   * Codec of the stream.
   * @type {string}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public codec?: string;

  /**
   * Aspect ratio of the video.
   * @type {string}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public aspectRatio?: string;

  /**
   * Container format's bitrate of the stream, in bits per second.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public bitrate?: number;

  /**
   * Average number of samples/frames read per second.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public samplesReadPerSecondAvg?: number;

  /**
   * Incoming bitrate measured in bits per second.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public incomingBitrate?: number;

  /**
   * Largest encountered key-frame interval in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public keyFrameIntervalMax?: number;

  /**
   * Average key-frame interval in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public keyFrameIntervalAvg?: number;

  /**
   * Last presentation timestamp (PTS) of the stream.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public lastTimestamp?: number;

  /**
   * Timescale of lastTimestamp
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public lastTimestampTimescale?: number;

  /**
   * Number of audio channels.
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public numberOfAudioChannels?: number;

  /**
   * Format of the audio channel.
   * @type {string}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public audioChannelFormat?: string;

  /**
   * lastArrivalTime timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public lastArrivalTime?: Date;

  /**
   * Indicates whether this particular stream is healthy.
   * @type {boolean}
   * @memberof LiveEncodingHeartbeatIngestStream
   */
  public healthy?: boolean;

  constructor(obj?: Partial<LiveEncodingHeartbeatIngestStream>) {
    if(!obj) {
      return;
    }
    this.streamId = map(obj.streamId);
    this.mediaType = map(obj.mediaType);
    this.width = map(obj.width);
    this.height = map(obj.height);
    this.rate = map(obj.rate);
    this.codec = map(obj.codec);
    this.aspectRatio = map(obj.aspectRatio);
    this.bitrate = map(obj.bitrate);
    this.samplesReadPerSecondAvg = map(obj.samplesReadPerSecondAvg);
    this.incomingBitrate = map(obj.incomingBitrate);
    this.keyFrameIntervalMax = map(obj.keyFrameIntervalMax);
    this.keyFrameIntervalAvg = map(obj.keyFrameIntervalAvg);
    this.lastTimestamp = map(obj.lastTimestamp);
    this.lastTimestampTimescale = map(obj.lastTimestampTimescale);
    this.numberOfAudioChannels = map(obj.numberOfAudioChannels);
    this.audioChannelFormat = map(obj.audioChannelFormat);
    this.lastArrivalTime = map(obj.lastArrivalTime, Date);
    this.healthy = map(obj.healthy);
  }
}

export default LiveEncodingHeartbeatIngestStream;

