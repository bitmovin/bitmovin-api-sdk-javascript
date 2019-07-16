import {map} from '../common/Mapper';

/**
 * The segmenting configuration for this WebVTT sidecar file. If this is set, the given vtt file will be chunked.
 * @export
 * @class WebVttSidecarFileSegmentation
 */
export class WebVttSidecarFileSegmentation {
  /**
   * The length of the WebVTT fragments in seconds (required)
   * @type {number}
   * @memberof WebVttSidecarFileSegmentation
   */
  public segmentLength: number;

  constructor(obj: Partial<WebVttSidecarFileSegmentation>) {
    this.segmentLength = map(obj.segmentLength);
  }
}

export default WebVttSidecarFileSegmentation;

