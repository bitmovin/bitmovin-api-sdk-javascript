import {map, mapArray} from '../common/Mapper';
import AzureSpeechToCaptionsSettings from './AzureSpeechToCaptionsSettings';
import Filter from './Filter';
import FilterType from './FilterType';

/**
 * @export
 * @class AzureSpeechToCaptionsFilter
 */
export class AzureSpeechToCaptionsFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof AzureSpeechToCaptionsFilter
   */
  public readonly type: FilterType = FilterType.AZURE_SPEECH_TO_CAPTIONS;

  /**
   * @type {AzureSpeechToCaptionsSettings}
   * @memberof AzureSpeechToCaptionsFilter
   */
  public azureSpeechToCaptionsSettings?: AzureSpeechToCaptionsSettings;

  constructor(obj?: Partial<AzureSpeechToCaptionsFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.azureSpeechToCaptionsSettings = map(obj.azureSpeechToCaptionsSettings, AzureSpeechToCaptionsSettings);
  }
}

export default AzureSpeechToCaptionsFilter;

