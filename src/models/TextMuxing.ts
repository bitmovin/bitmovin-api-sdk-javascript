import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class TextMuxing
 */
export class TextMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof TextMuxing
   */
  public readonly type: MuxingType = MuxingType.TEXT;

  /**
   * The output file name (required)
   * @type {string}
   * @memberof TextMuxing
   */
  public filename?: string;

  /**
   * Offset of MPEG-TS timestamps in seconds. This only affects streams with [WebVttConfiguration](#/Encoding/PostEncodingConfigurationsSubtitlesWebVtt). If set, the X-TIMESTAMP-MAP will be added as described in the [HLS specification](https://datatracker.ietf.org/doc/html/rfc8216#section-3.5). For example, if set to 10 seconds, *X-TIMESTAMP-MAP=MPEGTS:900000,LOCAL:00:00:00.000* will be added after each *WEBVTT* header. The default for TextMuxing is that the X-TIMESTAMP-MAP will not be written. Important to note is that the default for `startOffset` for [TsMuxings](#/Encoding/PostEncodingEncodingsMuxingsTsByEncodingId) and [ProgressiveTsMuxings](#/Encoding/PostEncodingEncodingsMuxingsProgressiveTsByEncodingId) is 10 seconds. If the output of this muxing is used for HLS together with video/audio streams using TsMuxings and ProgressiveTsMuxings, this value should be set to the same `startOffset`.
   * @type {number}
   * @memberof TextMuxing
   */
  public startOffset?: number;

  constructor(obj?: Partial<TextMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
    this.startOffset = map(obj.startOffset);
  }
}

export default TextMuxing;

