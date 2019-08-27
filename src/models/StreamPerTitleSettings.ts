import {map} from '../common/Mapper';
import StreamPerTitleFixedResolutionAndBitrateSettings from './StreamPerTitleFixedResolutionAndBitrateSettings';

/**
 * @export
 * @class StreamPerTitleSettings
 */
export class StreamPerTitleSettings {
  /**
   * Settings for PER_TITLE_TEMPLATE_FIXED_RESOLUTION_AND_BITRATE mode
   * @type {StreamPerTitleFixedResolutionAndBitrateSettings}
   * @memberof StreamPerTitleSettings
   */
  public fixedResolutionAndBitrateSettings?: StreamPerTitleFixedResolutionAndBitrateSettings;

  constructor(obj: Partial<StreamPerTitleSettings>) {

    this.fixedResolutionAndBitrateSettings = map<StreamPerTitleFixedResolutionAndBitrateSettings>(obj.fixedResolutionAndBitrateSettings, StreamPerTitleFixedResolutionAndBitrateSettings);
  }
}

export default StreamPerTitleSettings;

