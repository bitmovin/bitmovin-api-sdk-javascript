import {map, mapArray} from '../common/Mapper';
import AutoRestartConfiguration from './AutoRestartConfiguration';
import EncodingMode from './EncodingMode';
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
   * List of Hls manifests to use for this live encoding
   * @type {LiveHlsManifest[]}
   * @memberof StartLiveEncodingRequest
   */
  public hlsManifests?: LiveHlsManifest[];

  /**
   * List of Dash manifests to use for this live encoding
   * @type {LiveDashManifest[]}
   * @memberof StartLiveEncodingRequest
   */
  public dashManifests?: LiveDashManifest[];

  /**
   * The pass mode of the encoding
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
   * Version of the manifest generation engine to be used
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
  }
}

export default StartLiveEncodingRequest;

