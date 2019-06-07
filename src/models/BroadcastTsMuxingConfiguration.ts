import {map} from '../common/Mapper';
import BroadcastTsAudioInputStreamConfiguration from './BroadcastTsAudioInputStreamConfiguration';
import BroadcastTsProgramConfiguration from './BroadcastTsProgramConfiguration';
import BroadcastTsTransportConfiguration from './BroadcastTsTransportConfiguration';
import BroadcastTsVideoInputStreamConfiguration from './BroadcastTsVideoInputStreamConfiguration';

/**
 * @export
 * @class BroadcastTsMuxingConfiguration
 */
export class BroadcastTsMuxingConfiguration {
  constructor(obj: any) {
    this.transport = map<BroadcastTsTransportConfiguration>(obj.transport, BroadcastTsTransportConfiguration);
    this.program = map<BroadcastTsProgramConfiguration>(obj.program, BroadcastTsProgramConfiguration);
    this.videoStreams = map<BroadcastTsVideoInputStreamConfiguration>(obj.videoStreams, BroadcastTsVideoInputStreamConfiguration);
    this.audioStreams = map<BroadcastTsAudioInputStreamConfiguration>(obj.audioStreams, BroadcastTsAudioInputStreamConfiguration);
  }

  /**
   * Transport configuration details for the Broadcast TS muxing.
   * @type {BroadcastTsTransportConfiguration}
   * @memberof BroadcastTsMuxingConfiguration
   */
  public transport?: BroadcastTsTransportConfiguration;
  /**
   * Program configuration details for the Broadcast TS muxing.
   * @type {BroadcastTsProgramConfiguration}
   * @memberof BroadcastTsMuxingConfiguration
   */
  public program?: BroadcastTsProgramConfiguration;
  /**
   * @type {Array<BroadcastTsVideoInputStreamConfiguration>}
   * @memberof BroadcastTsMuxingConfiguration
   */
  public videoStreams?: Array<BroadcastTsVideoInputStreamConfiguration>;
  /**
   * @type {Array<BroadcastTsAudioInputStreamConfiguration>}
   * @memberof BroadcastTsMuxingConfiguration
   */
  public audioStreams?: Array<BroadcastTsAudioInputStreamConfiguration>;
}

export default BroadcastTsMuxingConfiguration;

