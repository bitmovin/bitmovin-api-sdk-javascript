import {map, mapArray} from '../common/Mapper';
import AutoRestartConfiguration from './AutoRestartConfiguration';
import CacheControlSettings from './CacheControlSettings';
import EncodingMode from './EncodingMode';
import EsamSettings from './EsamSettings';
import LiveAutoShutdownConfiguration from './LiveAutoShutdownConfiguration';
import LiveDashManifest from './LiveDashManifest';
import LiveHlsManifest from './LiveHlsManifest';
import ManifestGenerator from './ManifestGenerator';
import ReuploadSettings from './ReuploadSettings';

/**
 * @export
 * @class StartLiveEncodingRequest
 */
export class StartLiveEncodingRequest {
  /**
   * Key for the stream. (a-zA-Z, 3-20 characters) (required)
   * @type {string}
   * @memberof StartLiveEncodingRequest
   */
  public streamKey?: string;

  /**
   * HLS manifests to be generated during the encoding. See [documentation](https://developer.bitmovin.com/encoding/docs/how-to-create-manifests-for-your-encodings#just-in-time-jit)
   * @type {LiveHlsManifest[]}
   * @memberof StartLiveEncodingRequest
   */
  public hlsManifests?: LiveHlsManifest[];

  /**
   * DASH manifests to be generated during the encoding. See [documentation](https://developer.bitmovin.com/encoding/docs/how-to-create-manifests-for-your-encodings#just-in-time-jit)
   * @type {LiveDashManifest[]}
   * @memberof StartLiveEncodingRequest
   */
  public dashManifests?: LiveDashManifest[];

  /**
   * The pass mode of the encoding. Must only be set when `encodingMode` is not set on any codec configuration used by this encoding.
   * @type {EncodingMode}
   * @memberof StartLiveEncodingRequest
   */
  public liveEncodingMode?: EncodingMode;

  /**
   * Reupload specific files during a live encoding. This can be helpful if an automatic life cycle policy is enabled on the output storage
   * @type {ReuploadSettings}
   * @memberof StartLiveEncodingRequest
   */
  public reuploadSettings?: ReuploadSettings;

  /**
   * Major version of the manifest generator to be used for manifests referenced in this request (by properties dashManifests, dashManifests). `V2` is available for encoder versions 2.70.0 and above and is the recommended option. The default value depends on the sign-up date of your organization. See [documentation](https://developer.bitmovin.com/encoding/docs/manifest-generator-v2) page for a detailed explanation. 
   * @type {ManifestGenerator}
   * @memberof StartLiveEncodingRequest
   */
  public manifestGenerator?: ManifestGenerator;

  /**
   * Configuration for auto restarting the live encoding
   * @type {AutoRestartConfiguration}
   * @memberof StartLiveEncodingRequest
   */
  public autoRestartConfiguration?: AutoRestartConfiguration;

  /**
   * Configuration for auto shutdown of the live encoding
   * @type {LiveAutoShutdownConfiguration}
   * @memberof StartLiveEncodingRequest
   */
  public autoShutdownConfiguration?: LiveAutoShutdownConfiguration;

  /**
   * Configuration for Event Signaling and Management (ESAM) system,  allowing the encoder to communicate with an ESAM server for signal processing and dynamic ad insertion update.' 
   * @type {EsamSettings}
   * @memberof StartLiveEncodingRequest
   */
  public esamSettings?: EsamSettings;

  /**
   * Configuration of cache control policies for media segments, HLS, and DASH manifests.  You can set caching for the HLS multivariant playlist, HLS media playlist, DASH timeline manifest,  DASH template manifest, initialization segment, and media segment. 
   * @type {CacheControlSettings}
   * @memberof StartLiveEncodingRequest
   */
  public cacheControlSettings?: CacheControlSettings;

  constructor(obj?: Partial<StartLiveEncodingRequest>) {
    if(!obj) {
      return;
    }
    this.streamKey = map(obj.streamKey);
    this.hlsManifests = mapArray(obj.hlsManifests, LiveHlsManifest);
    this.dashManifests = mapArray(obj.dashManifests, LiveDashManifest);
    this.liveEncodingMode = map(obj.liveEncodingMode);
    this.reuploadSettings = map(obj.reuploadSettings, ReuploadSettings);
    this.manifestGenerator = map(obj.manifestGenerator);
    this.autoRestartConfiguration = map(obj.autoRestartConfiguration, AutoRestartConfiguration);
    this.autoShutdownConfiguration = map(obj.autoShutdownConfiguration, LiveAutoShutdownConfiguration);
    this.esamSettings = map(obj.esamSettings, EsamSettings);
    this.cacheControlSettings = map(obj.cacheControlSettings, CacheControlSettings);
  }
}

export default StartLiveEncodingRequest;

