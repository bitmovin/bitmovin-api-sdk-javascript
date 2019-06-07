import {map} from '../common/Mapper';
import BroadcastTsInputStreamConfiguration from './BroadcastTsInputStreamConfiguration';
import RaiUnit from './RaiUnit';

/**
 * @export
 * @class BroadcastTsAudioInputStreamConfiguration
 */
export class BroadcastTsAudioInputStreamConfiguration extends BroadcastTsInputStreamConfiguration {
  constructor(obj: any) {
    super(obj);
    this.useATSCBufferModel = map(obj.useATSCBufferModel);
    this.language = map(obj.language);
  }

  /**
   * Use ATSC buffer model for AC-3. If true, use the ATSC version of the T-STD buffer model is used. This parameter applies to AC-3 streams only.
   * @type {boolean}
   * @memberof BroadcastTsAudioInputStreamConfiguration
   */
  public useATSCBufferModel?: boolean;
  /**
   * Language of the audio stream. Specified according to the ISO 639-2 alpha code for the language descriptor.
   * @type {string}
   * @memberof BroadcastTsAudioInputStreamConfiguration
   */
  public language?: string;
}

export default BroadcastTsAudioInputStreamConfiguration;

