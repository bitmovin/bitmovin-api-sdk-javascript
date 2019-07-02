import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class SmoothStreamingRepresentation
 */
export class SmoothStreamingRepresentation extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.encodingId = map(obj.encodingId);
    this.muxingId = map(obj.muxingId);
    this.mediaFile = map(obj.mediaFile);
    this.language = map(obj.language);
    this.trackName = map(obj.trackName);
  }

  /**
   * Id of the encoding (required)
   * @type {string}
   * @memberof SmoothStreamingRepresentation
   */
  public encodingId: string;
  /**
   * Id of the muxing. (required)
   * @type {string}
   * @memberof SmoothStreamingRepresentation
   */
  public muxingId: string;
  /**
   * The Smooth Streaming ismv or isma file that will be referenced in the manifest. (required)
   * @type {string}
   * @memberof SmoothStreamingRepresentation
   */
  public mediaFile: string;
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
}

export default SmoothStreamingRepresentation;

