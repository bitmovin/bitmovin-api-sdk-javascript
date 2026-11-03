import {map, mapArray} from '../common/Mapper';
import Credits from './Credits';
import Metadata from './Metadata';
import Rating from './Rating';
import Scene from './Scene';

/**
 * VOD analysis of an encoded video. Field availability depends on enabled features and the analysis version. The REST response includes only fields defined by this API; asset-description.json files in customer outputs can contain additional fields. Empty arrays are omitted. Some unavailable values are returned as null, as noted on individual fields. Empty or missing values alone do not establish whether a feature was assessed. In language-specific results, free-text fields are translated into the requested language unless otherwise noted.
 * @export
 * @class SceneAnalysisDetailsResponse
 */
export class SceneAnalysisDetailsResponse {
  /**
   * Scenes identified in the video. (required)
   * @type {Scene[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public scenes?: Scene[];

  /**
   * Duration of the analyzed video in seconds.
   * @type {number}
   * @memberof SceneAnalysisDetailsResponse
   */
  public duration?: number;

  /**
   * AI-generated summary of the video as a whole. (required)
   * @type {string}
   * @memberof SceneAnalysisDetailsResponse
   */
  public description?: string;

  /**
   * Inferred title representing the analyzed content as a whole. If omitted or null, the title is not available.
   * @type {string}
   * @memberof SceneAnalysisDetailsResponse
   */
  public title?: string;

  /**
   * Free-text keywords describing the video as a whole. Preserve the returned spelling and case. (required)
   * @type {string[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public keywords?: string[];

  /**
   * AI-estimated content ratings for the indicated regions and rating systems. (required)
   * @type {Rating[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public ratings?: Rating[];

  /**
   * Sensitive topics for the video as a whole, in free text. This list can differ from the combined scene-level topics. (required)
   * @type {string[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public sensitiveTopics?: string[];

  /**
   * Distinct IAB Content Taxonomy identifiers drawn from the scenes' IAB sensitive-topic annotations. The list can be empty or unavailable even when individual scenes have topic annotations. (required)
   * @type {string[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public iabSensitiveTopicTaxonomies?: string[];

  /**
   * Language codes identified for spoken dialogue or narration in the source content. Theme-song vocals, lyrics, music and written text are excluded. The list can be empty when no codes were identified, including when the input has no audio stream. These codes do not indicate available translations.
   * @type {string[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public inputLanguageCodes?: string[];

  /**
   * Credits extracted from the video's on-screen text.
   * @type {Credits}
   * @memberof SceneAnalysisDetailsResponse
   */
  public credits?: Credits;

  /**
   * Information about the analysis that generated this result. (required)
   * @type {Metadata}
   * @memberof SceneAnalysisDetailsResponse
   */
  public metadata?: Metadata;

  constructor(obj?: Partial<SceneAnalysisDetailsResponse>) {
    if(!obj) {
      return;
    }
    this.scenes = mapArray(obj.scenes, Scene);
    this.duration = map(obj.duration);
    this.description = map(obj.description);
    this.title = map(obj.title);
    this.keywords = mapArray(obj.keywords);
    this.ratings = mapArray(obj.ratings, Rating);
    this.sensitiveTopics = mapArray(obj.sensitiveTopics);
    this.iabSensitiveTopicTaxonomies = mapArray(obj.iabSensitiveTopicTaxonomies);
    this.inputLanguageCodes = mapArray(obj.inputLanguageCodes);
    this.credits = map(obj.credits, Credits);
    this.metadata = map(obj.metadata, Metadata);
  }
}

export default SceneAnalysisDetailsResponse;

