import {map, mapArray} from '../common/Mapper';
import AzureSpeechServicesCredentials from './AzureSpeechServicesCredentials';
import AzureSpeechToCaptionsProfanity from './AzureSpeechToCaptionsProfanity';

/**
 * @export
 * @class AzureSpeechToCaptionsSettings
 */
export class AzureSpeechToCaptionsSettings {
  /**
   * Credential settings to access Azure Speech Services 
   * @type {AzureSpeechServicesCredentials}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public azureSpeechServicesCredentials?: AzureSpeechServicesCredentials;

  /**
   * Azure Speech Services Region Identifier. The list of speech service supported regions can be found at Azure's official documentation. 
   * @type {string}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public region?: string;

  /**
   * Azure Speech Services API endpoint. This information can be found in Azure's Speech resource data. 
   * @type {string}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public apiEndpoint?: string;

  /**
   * Azure Speech to captions supported language (IETF BCP 47 language tag). The list of supported languages can be found at Azure's official documentation. 
   * @type {string}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public language?: string;

  /**
   * How many MILLISECONDS to delay the display of each caption, to mimic a real-time experience. The minimum value is 0. 
   * @type {number}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public captionDelay?: number;

  /**
   * How many MILLISECONDS a caption should remain on screen if it is not replaced by another. The minimum value is 0. 
   * @type {number}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public captionRemainTime?: number;

  /**
   * The maximum number of characters per line for a caption.  The minimum value is 20. 
   * @type {number}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public captionMaxLineLength?: number;

  /**
   * The number of lines for a caption. The minimum value is 1. 
   * @type {number}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public captionLines?: number;

  /**
   * The profanity filter options are:  - Masked: Replaces letters in profane words with asterisk (*) characters. - Raw: Include the profane words verbatim. - Removed: Removes profane words. 
   * @type {AzureSpeechToCaptionsProfanity}
   * @memberof AzureSpeechToCaptionsSettings
   */
  public profanityOption?: AzureSpeechToCaptionsProfanity;

  constructor(obj?: Partial<AzureSpeechToCaptionsSettings>) {
    if(!obj) {
      return;
    }
    this.azureSpeechServicesCredentials = map(obj.azureSpeechServicesCredentials, AzureSpeechServicesCredentials);
    this.region = map(obj.region);
    this.apiEndpoint = map(obj.apiEndpoint);
    this.language = map(obj.language);
    this.captionDelay = map(obj.captionDelay);
    this.captionRemainTime = map(obj.captionRemainTime);
    this.captionMaxLineLength = map(obj.captionMaxLineLength);
    this.captionLines = map(obj.captionLines);
    this.profanityOption = map(obj.profanityOption);
  }
}

export default AzureSpeechToCaptionsSettings;

