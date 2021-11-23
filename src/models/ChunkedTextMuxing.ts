import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ChunkedTextMuxing
 */
export class ChunkedTextMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof ChunkedTextMuxing
   */
  public type: MuxingType.CHUNKED_TEXT = MuxingType.CHUNKED_TEXT;

  /**
   * Length of the segments in seconds (required)
   * @type {number}
   * @memberof ChunkedTextMuxing
   */
  public segmentLength?: number;

  /**
   * Segment naming template
   * @type {string}
   * @memberof ChunkedTextMuxing
   */
  public segmentNaming?: string;

  /**
   * Segment naming template with placeholders which will be replaced during the encoding. The result will be saved in segmentNaming. {rand:4} gets replaced with an alphanumeric string of length specified after the colon. Defaults to 32. If this field is set, segmentNaming must not be specified.
   * @type {string}
   * @memberof ChunkedTextMuxing
   */
  public segmentNamingTemplate?: string;

  /**
   * Offset of MPEG-TS timestamps in seconds. This only affects streams with [WebVttConfiguration](#/Encoding/PostEncodingConfigurationsSubtitlesWebVtt). If set, the X-TIMESTAMP-MAP will be added as described in the [HLS specification](https://datatracker.ietf.org/doc/html/rfc8216#section-3.5). For example, if set to 10 seconds, *X-TIMESTAMP-MAP=MPEGTS:900000,LOCAL:00:00:00.000* will be added after each *WEBVTT* header. The default for ChunkedTextMuxing is that the X-TIMESTAMP-MAP will not be written. Important to note is that the default for `startOffset` for [TsMuxings](#/Encoding/PostEncodingEncodingsMuxingsTsByEncodingId) and [ProgressiveTsMuxings](#/Encoding/PostEncodingEncodingsMuxingsProgressiveTsByEncodingId) is 10 seconds. If the output of this muxing is used for HLS together with video/audio streams using TsMuxings and ProgressiveTsMuxings, this value should be set to the same `startOffset`.
   * @type {number}
   * @memberof ChunkedTextMuxing
   */
  public startOffset?: number;

  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof ChunkedTextMuxing
   */
  public segmentsMuxed?: number;

  constructor(obj?: Partial<ChunkedTextMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.startOffset = map(obj.startOffset);
    this.segmentsMuxed = map(obj.segmentsMuxed);
  }
}

export default ChunkedTextMuxing;

