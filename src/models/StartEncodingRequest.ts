import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysis from './AiSceneAnalysis';
import EncodingMode from './EncodingMode';
import ManifestGenerator from './ManifestGenerator';
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
   * Allows to encode only part of the input. Defines start (offset) and duration of the desired section. This is not allowed when the Encoding uses any kind of Input Stream resource.
   * @type {Trimming}
   * @memberof StartEncodingRequest
   */
  public trimming?: Trimming;

  /**
   * Scheduling parameters of the encoding.
   * @type {Scheduling}
   * @memberof StartEncodingRequest
   */
  public scheduling?: Scheduling;

  /**
   * Special tweaks for your encoding job.
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
   * The pass mode of the encoding. Must only be set when `encodingMode` is not set on any codec configuration used by this encoding.
   * @type {EncodingMode}
   * @memberof StartEncodingRequest
   */
  public encodingMode?: EncodingMode;

  /**
   * DASH manifests to be generated for previewing while the encoding is still running. See [documentation](https://developer.bitmovin.com/encoding/docs/how-to-create-manifests-for-your-encodings#just-in-time-jit)
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public previewDashManifests?: ManifestResource[];

  /**
   * HLS manifests to be generated for previewing while the encoding is still running. See [documentation](https://developer.bitmovin.com/encoding/docs/how-to-create-manifests-for-your-encodings#just-in-time-jit)
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public previewHlsManifests?: ManifestResource[];

  /**
   * DASH manifests to be generated right after encoding (just-in-time). See [documentation](https://developer.bitmovin.com/encoding/docs/how-to-create-manifests-for-your-encodings#just-in-time-jit)
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public vodDashManifests?: ManifestResource[];

  /**
   * HLS manifests to be generated right after encoding (just-in-time). See [documentation](https://developer.bitmovin.com/encoding/docs/how-to-create-manifests-for-your-encodings#just-in-time-jit)
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public vodHlsManifests?: ManifestResource[];

  /**
   * Smooth Streaming manifests to be generated right after encoding (just-in-time). See [documentation](https://developer.bitmovin.com/encoding/docs/how-to-create-manifests-for-your-encodings#just-in-time-jit)
   * @type {ManifestResource[]}
   * @memberof StartEncodingRequest
   */
  public vodSmoothManifests?: ManifestResource[];

  /**
   * Major version of the manifest generator to be used for manifests referenced in this request (by properties vodDashManifests, vodHlsManifests, vodSmoothManifests, previewDashManifests, previewHlsManifests). `V2` is available for encoder versions 2.70.0 and above and is the recommended option. The default value depends on the sign-up date of your organization. See [documentation](https://developer.bitmovin.com/encoding/docs/manifest-generator-v2) page for a detailed explanation. 
   * @type {ManifestGenerator}
   * @memberof StartEncodingRequest
   */
  public manifestGenerator?: ManifestGenerator;

  /**
   * Per-Title settings
   * @type {PerTitle}
   * @memberof StartEncodingRequest
   */
  public perTitle?: PerTitle;

  /**
   * AI scene analysis settings
   * @type {AiSceneAnalysis}
   * @memberof StartEncodingRequest
   */
  public aiSceneAnalysis?: AiSceneAnalysis;

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
    this.manifestGenerator = map(obj.manifestGenerator);
    this.perTitle = map(obj.perTitle, PerTitle);
    this.aiSceneAnalysis = map(obj.aiSceneAnalysis, AiSceneAnalysis);
  }
}

export default StartEncodingRequest;

