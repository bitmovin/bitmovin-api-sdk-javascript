import {map, mapArray} from '../common/Mapper';
import EncodingMode from './EncodingMode';
import ManifestResource from './ManifestResource';
import PerTitle from './PerTitle';
import Scheduling from './Scheduling';
import Trimming from './Trimming';
import Tweaks from './Tweaks';

/**
 * @export
 * @class StartEncodingRequest
 */
export class StartEncodingRequest {
  /**
   * Allows to encode only part of the input. Defines start (offset) and duration of the desired section.
   * @type {Trimming}
   * @memberof StartEncodingRequest
   */
  public trimming?: Trimming;

  /**
   * Set scheduling parameters of the encoding.
   * @type {Scheduling}
   * @memberof StartEncodingRequest
   */
  public scheduling?: Scheduling;

  /**
   * Set special tweaks for your encoding job.
   * @type {Tweaks}
   * @memberof StartEncodingRequest
   */
  public tweaks?: Tweaks;

  /**
   * Enable frame dropping/duplication to handle variable frames per seconds of video input streams
   * @type {boolean}
   * @memberof StartEncodingRequest
   */
  public handleVariableInputFps?: boolean;

  /**
   * The pass mode of the encoding
   * @type {EncodingMode}
   * @memberof StartEncodingRequest
   */
  public encodingMode?: EncodingMode;

  /**
   * List of preview DASH manifests to be created
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public previewDashManifests?: ManifestResource[];

  /**
   * List of preview HLS manifests to be created
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public previewHlsManifests?: ManifestResource[];

  /**
   * List of VoD DASH manifests to be created after encoding finished successfully
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public vodDashManifests?: ManifestResource[];

  /**
   * List of VoD HLS manifests to be created after encoding finished successfully
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public vodHlsManifests?: ManifestResource[];

  /**
   * List of VoD SMOOTH manifests to be created after encoding finished successfully
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public vodSmoothManifests?: ManifestResource[];

  /**
   * Per-Title settings
   * @type {PerTitle}
   * @memberof StartEncodingRequest
   */
  public perTitle?: PerTitle;

  constructor(obj?: Partial<StartEncodingRequest>) {
    if(!obj) {
      return;
    }
    this.trimming = map(obj.trimming, Trimming);
    this.scheduling = map(obj.scheduling, Scheduling);
    this.tweaks = map(obj.tweaks, Tweaks);
    this.handleVariableInputFps = map(obj.handleVariableInputFps);
    this.encodingMode = map(obj.encodingMode);
    this.previewDashManifests = mapArray(obj.previewDashManifests, ManifestResource);
    this.previewHlsManifests = mapArray(obj.previewHlsManifests, ManifestResource);
    this.vodDashManifests = mapArray(obj.vodDashManifests, ManifestResource);
    this.vodHlsManifests = mapArray(obj.vodHlsManifests, ManifestResource);
    this.vodSmoothManifests = mapArray(obj.vodSmoothManifests, ManifestResource);
    this.perTitle = map(obj.perTitle, PerTitle);
  }
}

export default StartEncodingRequest;

