import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<StreamPerTitleFixedResolutionAndBitrateSettings>) {
    if(!obj) {
      return;
    }
    this.minBitrate = map(obj.minBitrate);
    this.maxBitrate = map(obj.maxBitrate);
    this.bitrateSelectionMode = map(obj.bitrateSelectionMode);
    this.lowComplexityBoundaryForMaxBitrate = map(obj.lowComplexityBoundaryForMaxBitrate);
    this.highComplexityBoundaryForMaxBitrate = map(obj.highComplexityBoundaryForMaxBitrate);
  }
}

export default StreamPerTitleFixedResolutionAndBitrateSettings;

