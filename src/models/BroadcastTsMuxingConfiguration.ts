import {map, mapArray} from '../common/Mapper';
import BroadcastTsAudioInputStreamConfiguration from './BroadcastTsAudioInputStreamConfiguration';
import BroadcastTsProgramConfiguration from './BroadcastTsProgramConfiguration';
import BroadcastTsTransportConfiguration from './BroadcastTsTransportConfiguration';
import BroadcastTsVideoInputStreamConfiguration from './BroadcastTsVideoInputStreamConfiguration';

/**
 * @export
 * @class BroadcastTsMuxingConfiguration
 */
export class BroadcastTsMuxingConfiguration {
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
   * @type {BroadcastTsVideoInputStreamConfiguration[]}
   * @memberof BroadcastTsMuxingConfiguration
   */
  public videoStreams?: BroadcastTsVideoInputStreamConfiguration[];

  /**
   * @type {BroadcastTsAudioInputStreamConfiguration[]}
   * @memberof BroadcastTsMuxingConfiguration
   */
  public audioStreams?: BroadcastTsAudioInputStreamConfiguration[];

  constructor(obj?: Partial<BroadcastTsMuxingConfiguration>) {
    if(!obj) {
      return;
    }
    this.transport = map(obj.transport, BroadcastTsTransportConfiguration);
    this.program = map(obj.program, BroadcastTsProgramConfiguration);
    this.videoStreams = mapArray(obj.videoStreams, BroadcastTsVideoInputStreamConfiguration);
    this.audioStreams = mapArray(obj.audioStreams, BroadcastTsAudioInputStreamConfiguration);
  }
}

export default BroadcastTsMuxingConfiguration;

