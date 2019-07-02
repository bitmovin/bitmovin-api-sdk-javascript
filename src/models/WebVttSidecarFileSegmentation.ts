import {map} from '../common/Mapper';

/**
 * The segmenting configuration for this WebVTT sidecar file. If this is set, the given vtt file will be chunked.
 * @export
 * @class WebVttSidecarFileSegmentation
 */
export class WebVttSidecarFileSegmentation {
  constructor(obj: any) {
    this.segmentLength = map(obj.segmentLength);
  }

  /**
   * The length of the WebVTT fragments in seconds (required)
   * @type {number}
   * @memberof WebVttSidecarFileSegmentation
   */
  public segmentLength: number;
}

export default WebVttSidecarFileSegmentation;

