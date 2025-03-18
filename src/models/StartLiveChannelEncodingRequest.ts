import AutoRestartConfiguration from './AutoRestartConfiguration';
import CacheControlSettings from './CacheControlSettings';
import EncodingMode from './EncodingMode';
import EsamSettings from './EsamSettings';
import LiveAutoShutdownConfiguration from './LiveAutoShutdownConfiguration';
import LiveDashManifest from './LiveDashManifest';
import LiveHlsManifest from './LiveHlsManifest';
import ManifestGenerator from './ManifestGenerator';
import ReuploadSettings from './ReuploadSettings';
import StartLiveEncodingRequest from './StartLiveEncodingRequest';

/**
 * @export
 * @class StartLiveChannelEncodingRequest
 */
export class StartLiveChannelEncodingRequest extends StartLiveEncodingRequest {
  constructor(obj?: Partial<StartLiveChannelEncodingRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default StartLiveChannelEncodingRequest;

