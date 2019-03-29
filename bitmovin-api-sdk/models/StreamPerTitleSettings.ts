import {map} from '../common/Mapper';
import StreamPerTitleFixedResolutionAndBitrateSettings from './StreamPerTitleFixedResolutionAndBitrateSettings';

/**
 * @export
 * @class StreamPerTitleSettings
 */
export default class StreamPerTitleSettings {
  constructor(obj: any) {
    this.fixedResolutionAndBitrateSettings = map<StreamPerTitleFixedResolutionAndBitrateSettings>(obj.fixedResolutionAndBitrateSettings, StreamPerTitleFixedResolutionAndBitrateSettings);
  }

  /**
   * Settings for PER_TITLE_TEMPLATE_FIXED_RESOLUTION_AND_BITRATE mode
   * @type {StreamPerTitleFixedResolutionAndBitrateSettings}
   * @memberof StreamPerTitleSettings
   */
  public fixedResolutionAndBitrateSettings?: StreamPerTitleFixedResolutionAndBitrateSettings;
}
