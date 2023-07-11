import {map, mapArray} from '../common/Mapper';

/**
 * Player style config
 * @export
 * @class StreamsStyleConfigPlayerStyle
 */
export class StreamsStyleConfigPlayerStyle {
  /**
   * Playback marker background color
   * @type {string}
   * @memberof StreamsStyleConfigPlayerStyle
   */
  public playbackMarkerBgColor?: string;

  /**
   * Playback marker border color
   * @type {string}
   * @memberof StreamsStyleConfigPlayerStyle
   */
  public playbackMarkerBorderColor?: string;

  /**
   * Playback track played color
   * @type {string}
   * @memberof StreamsStyleConfigPlayerStyle
   */
  public playbackTrackPlayedColor?: string;

  /**
   * Playback track buffered color
   * @type {string}
   * @memberof StreamsStyleConfigPlayerStyle
   */
  public playbackTrackBufferedColor?: string;

  /**
   * Playback track background color
   * @type {string}
   * @memberof StreamsStyleConfigPlayerStyle
   */
  public playbackTrackBgColor?: string;

  /**
   * Text color
   * @type {string}
   * @memberof StreamsStyleConfigPlayerStyle
   */
  public textColor?: string;

  /**
   * Background color
   * @type {string}
   * @memberof StreamsStyleConfigPlayerStyle
   */
  public backgroundColor?: string;

  constructor(obj?: Partial<StreamsStyleConfigPlayerStyle>) {
    if(!obj) {
      return;
    }
    this.playbackMarkerBgColor = map(obj.playbackMarkerBgColor);
    this.playbackMarkerBorderColor = map(obj.playbackMarkerBorderColor);
    this.playbackTrackPlayedColor = map(obj.playbackTrackPlayedColor);
    this.playbackTrackBufferedColor = map(obj.playbackTrackBufferedColor);
    this.playbackTrackBgColor = map(obj.playbackTrackBgColor);
    this.textColor = map(obj.textColor);
    this.backgroundColor = map(obj.backgroundColor);
  }
}

export default StreamsStyleConfigPlayerStyle;

