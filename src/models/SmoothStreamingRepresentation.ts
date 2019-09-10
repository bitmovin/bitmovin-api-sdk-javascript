import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class SmoothStreamingRepresentation
 */
export class SmoothStreamingRepresentation extends BitmovinResource {
  /**
   * Id of the encoding (required)
   * @type {string}
   * @memberof SmoothStreamingRepresentation
   */
  public encodingId?: string;

  /**
   * Id of the muxing. (required)
   * @type {string}
   * @memberof SmoothStreamingRepresentation
   */
  public muxingId?: string;

  /**
   * The Smooth Streaming ismv or isma file that will be referenced in the manifest. (required)
   * @type {string}
   * @memberof SmoothStreamingRepresentation
   */
  public mediaFile?: string;

  /**
   * Language of the MP4 file
   * @type {string}
   * @memberof SmoothStreamingRepresentation
   */
  public language?: string;

  /**
   * Track where this MP4 shoudl be added
   * @type {string}
   * @memberof SmoothStreamingRepresentation
   */
  public trackName?: string;

  /**
   * Specify the priority of this representation. Representations with higher priority will be listed first in the manifest.
   * @type {number}
   * @memberof SmoothStreamingRepresentation
   */
  public priority?: number;

  constructor(obj?: Partial<SmoothStreamingRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
    this.muxingId = map(obj.muxingId);
    this.mediaFile = map(obj.mediaFile);
    this.language = map(obj.language);
    this.trackName = map(obj.trackName);
    this.priority = map(obj.priority);
  }
}

export default SmoothStreamingRepresentation;

