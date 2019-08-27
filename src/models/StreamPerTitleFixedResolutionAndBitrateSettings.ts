import {map} from '../common/Mapper';
import BitrateSelectionMode from './BitrateSelectionMode';

/**
 * @export
 * @class StreamPerTitleFixedResolutionAndBitrateSettings
 */
export class StreamPerTitleFixedResolutionAndBitrateSettings {
  /**
   * The minimum bitrate that will be used for that template.
   * @type {number}
   * @memberof StreamPerTitleFixedResolutionAndBitrateSettings
   */
  public minBitrate?: number;

  /**
   * The maximum bitrate that will be used for that template.
   * @type {number}
   * @memberof StreamPerTitleFixedResolutionAndBitrateSettings
   */
  public maxBitrate?: number;

  /**
   * Bitrate selection mode
   * @type {BitrateSelectionMode}
   * @memberof StreamPerTitleFixedResolutionAndBitrateSettings
   */
  public bitrateSelectionMode?: BitrateSelectionMode;

  /**
   * Low complexity boundary for max bitrate
   * @type {number}
   * @memberof StreamPerTitleFixedResolutionAndBitrateSettings
   */
  public lowComplexityBoundaryForMaxBitrate?: number;

  /**
   * High complexity boundary for max bitrate
   * @type {number}
   * @memberof StreamPerTitleFixedResolutionAndBitrateSettings
   */
  public highComplexityBoundaryForMaxBitrate?: number;

  constructor(obj: Partial<StreamPerTitleFixedResolutionAndBitrateSettings>) {

    this.minBitrate = obj.minBitrate;
    this.maxBitrate = obj.maxBitrate;
    this.bitrateSelectionMode = obj.bitrateSelectionMode;
    this.lowComplexityBoundaryForMaxBitrate = obj.lowComplexityBoundaryForMaxBitrate;
    this.highComplexityBoundaryForMaxBitrate = obj.highComplexityBoundaryForMaxBitrate;
  }
}

export default StreamPerTitleFixedResolutionAndBitrateSettings;

